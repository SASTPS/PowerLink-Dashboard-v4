const pages = [
  {
    id: "home",
    icon: "⌂",
    title: "Home Dashboard",
    subtitle: "PowerLink Ghana 2050 operating snapshot and strategic command center",
    status: "Stable",
    render: renderHome
  },
  {
    id: "live",
    icon: "↯",
    title: "Live Operations",
    subtitle: "Real-time monitoring of solar, battery, demand, and facility power status",
    status: "All Regions",
    render: renderLive
  },
  {
    id: "equity",
    icon: "☷",
    title: "Equity & Access",
    subtitle: "Tracking energy access, affordability, schools, clinics, water, and productive use",
    status: "Impact-first",
    render: renderEquity
  },
  {
    id: "resilience",
    icon: "🛡",
    title: "Resilience & Security",
    subtitle: "Monitoring reliability, safety, backup power, weather readiness, and emergency response",
    status: "Zero major incidents",
    render: renderResilience
  },
  {
    id: "decision",
    icon: "◎",
    title: "Decision Support",
    subtitle: "Priority recommendations for technical innovation, equity, resilience, climate impact, and feasibility",
    status: "Action-ready",
    render: renderDecision
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Geographic view of priority hubs, facility clusters, and expansion corridors",
    status: "Northern Ghana focus",
    render: renderMap
  },
  {
    id: "dictionary",
    icon: "▣",
    title: "Data Dictionary",
    subtitle: "Definitions, data sources, and monitoring frequency for dashboard KPIs",
    status: "KPI governed",
    render: renderDictionary
  },
  {
    id: "scenario",
    icon: "⇄",
    title: "Scenario Comparison",
    subtitle: "Before / current / 2050 comparison across reliability, access, affordability, resilience, and impact",
    status: "Scenario model",
    render: renderScenario
  },
  {
    id: "about",
    icon: "ⓘ",
    title: "About the System",
    subtitle: "PowerLink Ghana 2050 project summary, KPI logic, and SDG alignment",
    status: "TechnoSaints Nexus",
    render: renderAbout
  }
];

const nav = document.getElementById("nav");
const pageTitle = document.getElementById("pageTitle");
const pageSubtitle = document.getElementById("pageSubtitle");
const pageStatus = document.getElementById("pageStatus");
const pageContent = document.getElementById("pageContent");

function init() {
  pages.forEach((page, index) => {
    const button = document.createElement("button");
    button.className = index === 0 ? "active" : "";
    button.dataset.page = page.id;
    button.innerHTML = `<span class="nav-icon">${page.icon}</span>${page.title}`;
    button.addEventListener("click", () => showPage(page.id));
    nav.appendChild(button);
  });

  showPage("home");
}

function showPage(id) {
  const page = pages.find(item => item.id === id);

  document.querySelectorAll(".nav button").forEach(button => {
    button.classList.toggle("active", button.dataset.page === id);
  });

  pageTitle.textContent = page.title;
  pageSubtitle.textContent = page.subtitle;
  pageStatus.textContent = page.status;
  pageContent.innerHTML = page.render();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function metricCard(icon, color, label, value, subtext) {
  return `
    <article class="card metric-card">
      <div class="icon ${color}">${icon}</div>
      <div>
        <div class="label">${label}</div>
        <div class="value">${value}</div>
        <div class="subtext">${subtext}</div>
      </div>
    </article>
  `;
}

function badge(text, color = "green") {
  return `<span class="badge badge-${color}">${text}</span>`;
}

function renderHome() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Solar Generation", "742 kW", "Current modeled solar production")}
      ${metricCard("▭", "green", "Battery Reserve", "68%", "Storage available for priority loads")}
      ${metricCard("⚡", "blue", "Microgrids Online", "78 / 80", "Long-term operating target")}
      ${metricCard("▤", "purple", "Critical Facilities Powered", "96%", "Clinics, schools, water, and hub loads")}
      ${metricCard("☷", "green", "Households Connected", "120,000", "2050 scale scenario")}
      ${metricCard("♻", "green", "Emissions Avoided", "385,000 tCO₂e", "Estimated lifetime avoided emissions")}
    </div>

    <div class="alert">
      <div>
        <strong>Alert: Battery Reserve Below Target</strong>
        <p>Northern Clinic Cluster battery reserve is below target. Recommended action: prioritize Phase 2 storage expansion and reduce noncritical loads.</p>
      </div>
      <button class="btn">View Recommended Action</button>
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Implementation Roadmap 2026–2050</h3>
        <p class="panel-subtitle">Projected transition from pilot to regional clean energy system</p>
        ${lineChart()}
      </section>

      <section class="card">
        <h3 class="panel-title">Command Center Health</h3>
        <p class="panel-subtitle">Operating readiness across the proposal’s six KPI families</p>
        ${progressList([
          ["Energy Reliability", "82"],
          ["Community Impact", "78"],
          ["Safety & Resilience", "74"],
          ["Cost & Finance", "65"],
          ["Environmental / SDG Impact", "76"],
          ["Implementation Readiness", "72"]
        ])}
      </section>
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Current Operating Priorities</h3>
      <p class="panel-subtitle">What the dashboard would tell the implementation team today</p>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Cluster</th>
            <th>Issue</th>
            <th>Recommended Action</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td>Northern Clinic Cluster</td>
            <td>Battery reserve below 20%</td>
            <td>Reserve power for clinic loads and dispatch maintenance</td>
            <td>${badge("High Priority", "red")}</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td>School + Water Hub</td>
            <td>Evening demand rising</td>
            <td>Shift noncritical loads and expand storage in Phase 2</td>
            <td>${badge("Watch", "yellow")}</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td>Productive Use Zone</td>
            <td>Small business demand increasing</td>
            <td>Evaluate load expansion after reliability target is maintained</td>
            <td>${badge("Opportunity", "blue")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderLive() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Current Solar Output", "742 kW", "Live generation estimate")}
      ${metricCard("▭", "green", "Battery Storage Level", "55%", "Current aggregate reserve")}
      ${metricCard("⚡", "blue", "Current Demand", "1,240 kW", "Active load across monitored hubs")}
      ${metricCard("▤", "purple", "Facility Power Status", "28 / 28", "Critical facilities currently powered")}
      ${metricCard("🔧", "yellow", "Maintenance Status", "1 Active", "Open service work order")}
      ${metricCard("☔", "cyan", "Weather Risk", "Medium", "Heat, dust, rainfall, and storm exposure")}
    </div>

    <section class="card">
      <h3 class="panel-title">Microgrid Status</h3>
      <p class="panel-subtitle">Operational status across monitored hub clusters</p>
      <table>
        <thead>
          <tr>
            <th>Microgrid</th>
            <th>Region</th>
            <th>Battery %</th>
            <th>Reserve Hours</th>
            <th>Load Status</th>
            <th>Facilities Served</th>
            <th>Status</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>MG-01</strong></td>
            <td>Northern Hub</td>
            <td style="color:#16a34a;">▭ 72%</td>
            <td>16.8 hrs</td>
            <td>Normal</td>
            <td>7</td>
            <td>${badge("Stable", "green")}</td>
            <td>Continue standard monitoring</td>
          </tr>
          <tr>
            <td><strong>MG-02</strong></td>
            <td>Coastal Resilience Cluster</td>
            <td style="color:#f97316;">▭ 48%</td>
            <td>9.6 hrs</td>
            <td>Elevated evening demand</td>
            <td>5</td>
            <td>${badge("Watch", "yellow")}</td>
            <td>Shift noncritical loads to daylight hours</td>
          </tr>
          <tr>
            <td><strong>MG-03</strong></td>
            <td>Urban Enterprise Cluster</td>
            <td style="color:#16a34a;">▭ 82%</td>
            <td>18.4 hrs</td>
            <td>Normal</td>
            <td>10</td>
            <td>${badge("Stable", "green")}</td>
            <td>Candidate for productive-use expansion</td>
          </tr>
          <tr>
            <td><strong>MG-04</strong></td>
            <td>Northern Clinic Cluster</td>
            <td style="color:#dc2626;">▭ 18%</td>
            <td>3.2 hrs</td>
            <td>Priority load protection</td>
            <td>6</td>
            <td>${badge("Warning", "red")}</td>
            <td>Reserve power for clinic loads and dispatch maintenance</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderEquity() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☷", "blue", "Rural Communities Served", "42", "Priority access communities")}
      ${metricCard("🎓", "green", "Schools Powered", "220", "2050 scale scenario")}
      ${metricCard("♡", "red", "Clinics Powered", "140", "2050 scale scenario")}
      ${metricCard("✦", "purple", "Girls Education STEM Centers", "18", "Education and workforce pathway")}
      ${metricCard("$", "yellow", "Affordability Improvement", "31%", "Estimated reduction in energy burden")}
      ${metricCard("◷", "blue", "Evening Study Hours Added", "5.2", "Average additional study hours per day")}
    </div>

    <div class="alert info">
      <div>
        <strong>Priority Recommendation</strong>
        <p>Northern Rural Cluster should receive Phase 2 storage expansion due to lower reliability, higher energy burden, and stronger school / clinic impact potential.</p>
        <div class="chips">
          <span class="chip">High Impact</span>
          <span class="chip">Rural Access</span>
          <span class="chip">Clinic + School Priority</span>
        </div>
      </div>
    </div>

    <section class="card">
      <h3 class="panel-title">Access Improvement by Sector</h3>
      <p class="panel-subtitle">Baseline vs 2050 proposed coverage</p>
      ${barChart()}
    </section>
  `;
}

function renderResilience() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🛡", "green", "Backup Power Coverage", "94%", "Critical facilities with backup support")}
      ${metricCard("▭", "blue", "Battery Hours Remaining", "14.2", "Average priority-load autonomy")}
      ${metricCard("◷", "purple", "Outage Response Target", "Under 4 hours", "Restoration response target")}
      ${metricCard("🔒", "blue", "Cybersecurity Readiness", "84%", "Monitoring and data integrity controls")}
      ${metricCard("☔", "cyan", "Extreme Weather Readiness", "90%", "Storm, heat, and environmental exposure planning")}
      ${metricCard("✓", "green", "Inspection Completion", "Monthly", "Safety and O&M checklist")}
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Active Risk Monitoring</h3>
        <p class="panel-subtitle">Current system threats and operating alerts</p>
        <div class="risk-list">
          <div class="risk-row risk-high">
            <strong>⚠ Low Battery Reserve</strong>
            <span>High</span>
          </div>
          <div class="risk-row risk-medium">
            <strong>⚠ Storm Risk</strong>
            <span>Medium</span>
          </div>
          <div class="risk-row risk-low">
            <strong>△ Cybersecurity Alert</strong>
            <span>Low</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Critical Facility Priority Stack</h3>
        <p class="panel-subtitle">Power restoration and load protection order</p>
        <div class="priority-stack">
          <div class="stack-row"><span>1</span><strong>Clinics and vaccine refrigeration</strong></div>
          <div class="stack-row"><span>2</span><strong>Schools</strong></div>
          <div class="stack-row"><span>3</span><strong>Water and community hubs</strong></div>
          <div class="stack-row"><span>4</span><strong>Small business and agriculture</strong></div>
        </div>
      </section>
    </div>
  `;
}

function renderDecision() {
  return `
    <div class="decision-tabs">
      <span class="decision-chip blue-chip">Technical Innovation</span>
      <span class="decision-chip purple-chip">Equity Access</span>
      <span class="decision-chip green-chip">Resilience Security</span>
      <span class="decision-chip cyan-chip">Climate Impact</span>
      <span class="decision-chip neutral-chip">Feasibility</span>
    </div>

    <section class="priority-card high-priority">
      <div class="priority-label">High Priority</div>
      <div class="priority-body">
        <div class="icon red">▭</div>
        <div>
          <h3>Northern Clinic Cluster</h3>
          <p>Battery below 20%; reserve power for clinic operations and dispatch maintenance.</p>
          <div class="mini-metrics">
            <div><span>Battery Level</span><strong>18%</strong></div>
            <div><span>Response Time</span><strong>&lt; 2 hours</strong></div>
          </div>
          <div class="chips">
            <span class="chip">Resilience Security</span>
            <span class="chip">Technical Innovation</span>
          </div>
        </div>
        <button class="btn">Review Details</button>
      </div>
    </section>

    <section class="priority-card medium-priority">
      <div class="priority-label">Medium Priority</div>
      <div class="priority-body">
        <div class="icon yellow">☔</div>
        <div>
          <h3>Coastal Resilience Cluster</h3>
          <p>Weather risk increasing; increase evening battery reserve and shift noncritical loads.</p>
          <div class="mini-metrics">
            <div><span>Storm Risk</span><strong>Medium</strong></div>
            <div><span>Action Window</span><strong>24–48 hours</strong></div>
          </div>
          <div class="chips">
            <span class="chip">Resilience Security</span>
            <span class="chip">Climate Impact</span>
            <span class="chip">Technical Innovation</span>
          </div>
        </div>
        <button class="btn">Review Details</button>
      </div>
    </section>
  `;
}

function renderMap() {
  return `
    <div class="grid two-col">
      <section class="card map-panel">
        <h3 class="panel-title">Ghana Energy Access Map</h3>
        <p class="panel-subtitle">Illustrative priority-zone map for resilience hubs and expansion corridors</p>

        <div class="map-visual">
          <div class="ghana-shape"></div>

          <div class="map-marker marker-north"><span></span><strong>Northern Hub</strong></div>
          <div class="map-marker marker-clinic"><span></span><strong>Clinic Cluster</strong></div>
          <div class="map-marker marker-school"><span></span><strong>School + Water Hub</strong></div>
          <div class="map-marker marker-enterprise"><span></span><strong>Enterprise Zone</strong></div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Regional Operating Overlay</h3>
        <p class="panel-subtitle">How the map supports deployment decisions</p>
        <div class="mini-list">
          <div class="mini-item"><strong>Northern Ghana Priority Zone</strong><p>Highest pilot value because it combines rural access, clinic reliability, education impact, and productive-use needs.</p></div>
          <div class="mini-item"><strong>Clinic Cluster Risk</strong><p>Battery reserve and outage risk drive the first action recommendation.</p></div>
          <div class="mini-item"><strong>School + Water Hub</strong><p>Best combined social-return cluster for evening learning and public health benefits.</p></div>
          <div class="mini-item"><strong>Expansion Corridor</strong><p>Validated pilot hubs can scale into a corridor-to-region deployment strategy.</p></div>
        </div>
      </section>
    </div>
  `;
}

function renderDictionary() {
  const rows = [
    ["Critical Load Uptime", "Percent of time priority loads remain powered.", "Energy Reliability", "Sensors / outage logs", "Daily"],
    ["Battery Reserve", "Available storage compared with usable storage capacity.", "Resilience", "Battery monitoring", "Hourly"],
    ["Battery Autonomy", "Estimated hours the system can support priority loads.", "Resilience", "Load model + storage data", "Hourly"],
    ["Solar Output", "Current or estimated photovoltaic generation.", "Energy Reliability", "Inverter / meter data", "Hourly"],
    ["Outage Hours Avoided", "Estimated outage time reduced by solar + storage.", "Energy Reliability", "Grid logs + system data", "Monthly"],
    ["Clinics Powered", "Number of clinics served by reliable energy.", "Community Impact", "Facility records", "Monthly"],
    ["Schools Powered", "Number of schools served by reliable energy.", "Community Impact", "Facility records", "Monthly"],
    ["Water Access Reliability", "Availability of energy for water pumping or treatment.", "Community Impact", "Pump runtime", "Daily"],
    ["Funding Readiness", "Progress toward viable funding and partnership package.", "Cost & Finance", "Project records", "Monthly"],
    ["Permitting Readiness", "Progress through environmental, utility, and local approvals.", "Implementation", "Permit tracker", "Monthly"],
    ["Procurement Readiness", "Progress toward equipment selection and purchasing release.", "Implementation", "Procurement tracker", "Monthly"],
    ["CO₂ Avoided", "Estimated emissions displaced by clean power.", "Environmental / SDG", "Energy model", "Monthly"]
  ];

  return `
    <section class="card">
      <h3 class="panel-title">KPI Data Dictionary</h3>
      <p class="panel-subtitle">Definitions, categories, sources, and update frequency</p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Definition</th>
            <th>KPI Family</th>
            <th>Data Source</th>
            <th>Frequency</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td><strong>${row[0]}</strong></td>
              <td>${row[1]}</td>
              <td>${row[2]}</td>
              <td>${row[3]}</td>
              <td>${row[4]}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </section>
  `;
}

function renderScenario() {
  return `
    <div class="alert info">
      <div>
        <strong>Before / Current / 2050 Scenario Comparison</strong>
        <p>This view compares historical baseline conditions, current progress, and the team’s proposed future energy system.</p>
      </div>
    </div>

    <div class="grid three-col">
      ${scenarioSummary("2000 Baseline", "Historical baseline before major clean energy initiatives", "45%", "gray")}
      ${scenarioSummary("2026 Current State", "Current system performance and infrastructure status", "78%", "blue")}
      ${scenarioSummary("2050 Proposed System", "Proposed target state with full implementation", "98%", "green")}
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Metric Comparison Across Scenarios</h3>
      <p class="panel-subtitle">Energy access, reliability, affordability, resilience, and impact</p>
      ${comparisonBars("Energy Access", "45", "78", "98", "% Population")}
      ${comparisonBars("Reliability", "52", "82", "96", "% Uptime")}
      ${comparisonBars("Affordability", "40", "68", "88", "Index Score")}
      ${comparisonBars("Critical Facility Coverage", "38", "76", "96", "% Facilities")}
      ${comparisonBars("Clean Energy Share", "22", "58", "92", "% Renewable")}
    </section>
  `;
}

function renderAbout() {
  return `
    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Project Purpose</h3>
        <p>The PowerLink Ghana 2050 Command Center is a student-built dashboard prototype for the Girls With Energy Challenge. It shows how solar generation, battery storage, smart monitoring, funding readiness, and community-centered design can support reliable energy access in Ghana.</p>

        <div class="alert info" style="margin-top: 18px;">
          <div>
            <strong>If we cannot measure it, we cannot prove it worked — or improve it.</strong>
            <p>This dashboard turns the proposal into a measurable performance system.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">KPI Families</h3>
        <div class="mini-list">
          <div class="mini-item"><strong>Energy Reliability</strong><p>Uptime, battery autonomy, outage hours avoided, solar output, and priority load served.</p></div>
          <div class="mini-item"><strong>Community Impact</strong><p>Clinics, schools, water access, productive use, and rural communities served.</p></div>
          <div class="mini-item"><strong>Safety & Resilience</strong><p>Safety incidents, weather readiness, backup hours, cybersecurity, and restoration priority.</p></div>
          <div class="mini-item"><strong>Cost & Finance</strong><p>CAPEX, OPEX, funding readiness, maintenance reserve, and procurement readiness.</p></div>
          <div class="mini-item"><strong>Environmental / SDG Impact</strong><p>CO₂ avoided, renewable share, diesel avoided, and SDG alignment.</p></div>
          <div class="mini-item"><strong>Implementation Readiness</strong><p>Site assessment, permitting, procurement, training, O&M model, and risk register.</p></div>
        </div>
      </section>
    </div>
  `;
}

function progressList(items) {
  return `
    <div class="progress-list">
      ${items.map(([label, value]) => `
        <div class="progress-item">
          <strong>${label}<span>${value}%</span></strong>
          <div class="bar"><div class="fill" style="width:${value}%"></div></div>
        </div>
      `).join("")}
    </div>
  `;
}

function lineChart() {
  return `
    <div class="chart-wrap">
      <svg viewBox="0 0 1000 260" preserveAspectRatio="none">
        <line x1="40" y1="220" x2="980" y2="220" stroke="#cbd5e1" />
        <line x1="40" y1="20" x2="40" y2="220" stroke="#cbd5e1" />
        <g stroke="#e5e7eb" stroke-dasharray="4">
          <line x1="40" y1="170" x2="980" y2="170" />
          <line x1="40" y1="120" x2="980" y2="120" />
          <line x1="40" y1="70" x2="980" y2="70" />
        </g>
        <polyline points="40,200 180,176 340,148 500,105 660,70 820,45 980,20" fill="none" stroke="#45c463" stroke-width="5" />
        <g fill="#45c463">
          <circle cx="40" cy="200" r="7" />
          <circle cx="180" cy="176" r="7" />
          <circle cx="340" cy="148" r="7" />
          <circle cx="500" cy="105" r="7" />
          <circle cx="660" cy="70" r="7" />
          <circle cx="820" cy="45" r="7" />
          <circle cx="980" cy="20" r="7" />
        </g>
        <g fill="#64748b" font-size="14">
          <text x="32" y="244">2026</text>
          <text x="165" y="244">2028</text>
          <text x="325" y="244">2030</text>
          <text x="485" y="244">2035</text>
          <text x="645" y="244">2040</text>
          <text x="805" y="244">2045</text>
          <text x="955" y="244">2050</text>
        </g>
      </svg>
    </div>
  `;
}

function barChart() {
  return `
    <div class="chart-wrap">
      <svg viewBox="0 0 1000 260" preserveAspectRatio="none">
        <line x1="50" y1="220" x2="980" y2="220" stroke="#cbd5e1" />
        <line x1="50" y1="20" x2="50" y2="220" stroke="#cbd5e1" />
        <g stroke="#e5e7eb" stroke-dasharray="4">
          <line x1="50" y1="170" x2="980" y2="170" />
          <line x1="50" y1="120" x2="980" y2="120" />
          <line x1="50" y1="70" x2="980" y2="70" />
        </g>
        <g fill="#45c463">
          <rect x="90" y="95" width="70" height="125" rx="4" />
          <rect x="280" y="112" width="70" height="108" rx="4" />
          <rect x="470" y="75" width="70" height="145" rx="4" />
          <rect x="660" y="135" width="70" height="85" rx="4" />
          <rect x="850" y="120" width="70" height="100" rx="4" />
        </g>
        <g fill="#64748b" font-size="14">
          <text x="92" y="242">Homes</text>
          <text x="282" y="242">Schools</text>
          <text x="472" y="242">Clinics</text>
          <text x="660" y="242">Agriculture</text>
          <text x="835" y="242">Small Business</text>
        </g>
      </svg>
    </div>
  `;
}

function scenarioSummary(title, text, value, color) {
  return `
    <section class="card scenario-summary ${color}">
      <h3>${title}</h3>
      <p>${text}</p>
      <strong>${value}</strong>
    </section>
  `;
}

function comparisonBars(metric, base, current, future, unit) {
  return `
    <div class="comparison-block">
      <div class="comparison-header">
        <strong>${metric}</strong>
        <span>${unit}</span>
      </div>
      <div class="comparison-row">
        <span>2000</span>
        <div class="comparison-track"><div class="comparison-fill gray-fill" style="width:${base}%">${base}%</div></div>
      </div>
      <div class="comparison-row">
        <span>2026</span>
        <div class="comparison-track"><div class="comparison-fill blue-fill" style="width:${current}%">${current}%</div></div>
      </div>
      <div class="comparison-row">
        <span>2050</span>
        <div class="comparison-track"><div class="comparison-fill green-fill" style="width:${future}%">${future}%</div></div>
      </div>
    </div>
  `;
}

init();
