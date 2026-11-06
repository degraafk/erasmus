let filtered = [...data];
let sortKey = "overall";
let sortAsc = false;
const TEXT_KEYS = ["country", "city", "university", "field", "nivel"];
const active = { field: new Set(), country: new Set(), meses: new Set() };

function ratingBars(n) {
  let html = '<div class="rating">';
  for (let i = 1; i <= 5; i++) html += `<span class="${i <= n ? 'on' : ''}"></span>`;
  return html + '</div>';
}

function buildSlicers() {
  const fields = [...new Set(data.map(d => d.field))].sort();
  document.getElementById("slicer-field").innerHTML = fields.map(f =>
    `<span class="chip" data-group="field" data-value="${f}">${f}</span>`
  ).join("");

  const countries = [...new Set(data.map(d => d.country))].sort();
  document.getElementById("slicer-country").innerHTML = countries.map(c => {
    const flag = data.find(d => d.country === c).flag;
    return `<span class="chip" data-group="country" data-value="${c}"><span class="flag">${flag}</span> ${c}</span>`;
  }).join("");

  const mesesOpts = [...new Set(data.map(d => d.meses))].sort((a, b) => a - b);
  document.getElementById("slicer-meses").innerHTML = mesesOpts.map(m =>
    `<span class="chip" data-group="meses" data-value="${m}">${m} months</span>`
  ).join("");

  document.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      const group = chip.dataset.group;
      const value = chip.dataset.value;
      if (active[group].has(value)) {
        active[group].delete(value);
        chip.classList.remove("active");
      } else {
        active[group].add(value);
        chip.classList.add("active");
      }
      applyFilters();
    });
  });
}

function clearSlicer(group) {
  active[group].clear();
  document.querySelectorAll(`.chip[data-group="${group}"]`).forEach(c => c.classList.remove("active"));
  applyFilters();
}

function applyFilters() {
  const q = document.getElementById("search").value.toLowerCase().trim();
  filtered = data.filter(d => {
    if (active.field.size && !active.field.has(d.field)) return false;
    if (active.country.size && !active.country.has(d.country)) return false;
    if (active.meses.size && !active.meses.has(String(d.meses))) return false;
    if (q) {
      const hay = (d.country + " " + d.city + " " + d.university + " " + d.field + " " + d.nivel).toLowerCase();
      if (!hay.includes(q)) return false;
    }
    return true;
  });
  sortData();
  render();
}

function sortData() {
  filtered.sort((a, b) => {
    let va = a[sortKey], vb = b[sortKey];
    if (typeof va === "string") va = va.toLowerCase();
    if (typeof vb === "string") vb = vb.toLowerCase();
    if (va < vb) return sortAsc ? -1 : 1;
    if (va > vb) return sortAsc ? 1 : -1;
    return 0;
  });
}

function render() {
  const tbody = document.getElementById("tbody");
  const empty = document.getElementById("empty");
  document.querySelectorAll("th").forEach(th => th.classList.toggle("sorted", th.dataset.key === sortKey));
  if (filtered.length === 0) {
    tbody.innerHTML = "";
    empty.style.display = "block";
    return;
  }
  empty.style.display = "none";
  tbody.innerHTML = filtered.map(d => `
    <tr>
      <td><div class="country-cell"><span class="flag">${d.flag}</span><span>${d.country}</span></div></td>
      <td>${d.city}</td>
      <td><strong>${d.university}</strong>${d.cunef ? ' <span class="tag-cunef">CUNEF</span>' : ''}${d.comillas ? ' <span class="tag-comillas">Comillas</span>' : ''}</td>
      <td><span class="badge badge-${d.fieldClass}">${d.field}</span></td>
      <td class="num plz-entry">${d.plazas}</td>
      <td class="num plz-uni" title="All UC3M plazas at ${d.university} (every degree)">${d.plazasUni}</td>
      <td class="num plz-city" title="All UC3M plazas in ${d.cityKey} (every university and degree)">${d.plazasCity}</td>
      <td class="num">${d.meses}</td>
      <td>${ratingBars(d.lifestyle)}</td>
      <td>${ratingBars(d.size)}</td>
      <td>${ratingBars(d.citylife)}</td>
      <td>${ratingBars(d.difficulty)}</td>
      <td>${ratingBars(d.prestige)}</td>
      <td><div class="overall"><span class="rank">#${d.rank}</span><span class="score ${d.rank <= 10 ? 'top' : ''}">${d.overall.toFixed(2)}</span></div></td>
      <td class="nivel">${d.nivel.replace(/\n/g, "<br>")}</td>
    </tr>
  `).join("");
}

document.getElementById("search").addEventListener("input", applyFilters);
document.querySelectorAll("th[data-key]").forEach(th => {
  th.addEventListener("click", () => {
    const key = th.dataset.key;
    if (sortKey === key) sortAsc = !sortAsc;
    else { sortKey = key; sortAsc = TEXT_KEYS.includes(key); }
    sortData();
    render();
  });
});

buildSlicers();
applyFilters();
