// Minimal frontend app (no build system) - fetches from backend
(function(){
  const root = document.getElementById('root');
  const container = document.createElement('div');
  container.className = 'card';
  container.innerHTML = '<h1>Banking Dashboard (Demo)</h1><div id="list"></div><form id="form"><input id="date" placeholder="YYYY-MM-DD" /><input id="desc" placeholder="Description" /><input id="amt" placeholder="Amount" /><button type="submit">Add</button></form>';
  root.appendChild(container);

  const listEl = document.getElementById('list');

  async function fetchTx(){
    try {
      const res = await fetch('http://localhost:4000/api/transactions');
      const data = await res.json();
      render(data.transactions);
    } catch(e){
      listEl.innerHTML = '<p style="color:#999">Cannot reach backend. Start backend at port 4000.</p>';
    }
  }

  function render(txs){
    const html = txs.map(t=>{
      const cls = t.amount >=0 ? 'pos' : 'neg';
      return `<div class="tx"><div>${t.date} — ${t.description}</div><div class="${cls}">$${t.amount.toFixed(2)}</div></div>`;
    }).join('');
    listEl.innerHTML = html;
  }

  document.getElementById('form').addEventListener('submit', async function(e){
    e.preventDefault();
    const date = document.getElementById('date').value;
    const desc = document.getElementById('desc').value;
    const amt = document.getElementById('amt').value;
    await fetch('http://localhost:4000/api/transactions', {
      method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({date, description:desc, amount: parseFloat(amt)})
    });
    document.getElementById('date').value=''; document.getElementById('desc').value=''; document.getElementById('amt').value='';
    fetchTx();
  });

  fetchTx();
})();
