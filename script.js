const pages = [
  {
    id: "home",
    icon: "⌂",
    title: "Home",
    subtitle: "Executive overview of the PowerLink Ghana 2050 energy access strategy",
    status: "Stable",
    render: renderHome
  },
  {
    id: "live",
    icon: "↯",
    title: "Live Operations",
    subtitle: "Real-time monitoring of solar, battery, demand, and microgrid operations",
    status: "All Regions",
    render: renderLive
  },
  {
    id: "equity",
    icon: "☷",
    title: "Equity & Access",
    subtitle: "Tracking energy access across underserved communities",
    status: "Impact-first",
    render: renderEquity
  },
  {
    id: "resilience",
    icon: "🛡",
    title: "Resilience",
    subtitle: "Safety, backup power, weather readiness, and priority restoration",
    status: "Zero major incidents",
    render: renderResilience
  },
  {
    id: "decision",
    icon: "◎",
    title: "Decision Support",
    subtitle: "Funding, feasibility, risks, and deployment recommendations",
    status: "Judge-ready realism",
    render: renderDecision
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Geographic view of priority hubs, facilities, and expansion corridors",
    status: "Northern focus",
    render: renderMap
  },
  {
    id: "dictionary",
    icon: "▣",
    title: "Data Dictionary",
    subtitle: "Definitions, data sources, and measurement frequency for core KPIs",
    status: "KPI governed",
    render: renderDictionary
  },
  {
    id: "scenario",
    icon: "⇄",
    title: "Scenario Comparison",
    subtitle: "Compare pilot, expanded hub, and corridor expansion strategies",
    status: "Decision matrix",
    render: renderScenario
  },
  {
    id: "roadmap",
    icon: "→",
    title: "Implementation Roadmap",
    subtitle: "0–3 years pilot, 3–10 years scale, and 10+ years sustain",
    status: "2050 pathway",
    render: renderRoadmap
  },
  {
    id: "about",
    icon: "ⓘ",
    title: "About the System",
    subtitle: "PowerLink Ghana 2050 project summary, SDG alignment, and dashboard purpose",
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
      ${metricCard("☀", "yellow", "Solar Generation", "742 kW", "Prototype operating assumption")}
      ${metricCard("▭", "green", "Battery Reserve", "68%", "Storage available for priority loads")}
      ${metricCard("⚡", "blue", "Microgrids Online", "78/80", "Long-term scale scenario")}
      ${metricCard("▤", "purple", "Critical Facilities Powered", "96%", "Clinic, school, water, and hub loads")}
      ${metricCard("☷", "green", "Households Connected", "120,000", "Long-term community access scenario")}
      ${metricCard("♻", "green", "Emissions Avoided", "385,000 tons CO₂e", "Estimated lifetime avoided emissions")}
    </div>

    <div class="alert">
      <div>
        <strong>Alert: Battery Reserve Below Target</strong>
        <p>Northern Clinic Cluster battery reserve is below target. Recommended action: prioritize Phase 2 storage expansion.</p>
      </div>
      <button class="btn">View Recommended Action</button>
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Implementation Roadmap 2026–2050</h3>
        <p class="panel-subtitle">Projected clean energy transition progress</p>
        ${lineChart()}
      </section>

      <section class="card">
        <h3 class="panel-title">KPI Category Health</h3>
        <p class="panel-subtitle">Dashboard focus areas tied to judging strength</p>
        ${progressList([
          ["Energy Reliability", "82"],
          ["Community Impact", "78"],
          ["Safety & Resilience", "70"],
          ["Cost & Finance", "65"],
          ["Environmental / SDG Impact", "74"],
          ["Implementation Readiness", "72"]
        ])}
      </section>
    </div>
  `;
}

function renderLive() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Current Solar Output", "742 kW", "Live generation estimate")}
      ${metricCard("▭", "green", "Battery Storage Level", "55%", "Current reserve level")}
      ${metricCard("⚡", "blue", "Current Demand", "1,240 kW", "Active load across monitored hubs")}
      ${metricCard("▤", "purple", "Facility Power Status", "28/28", "Critical facilities online")}
      ${metricCard("🔧", "yellow", "Maintenance Status", "1 Active", "Open service issue")}
      ${metricCard("☔", "cyan", "Weather Risk", "Medium", "Heat, dust, rainfall, and storm exposure")}
    </div>

    <section class="card">
      <h3 class="panel-title">Microgrid Status</h3>
      <p class="panel-subtitle">Real-time performance monitoring</p>
      <table>
        <thead>
          <tr>
            <th>Microgrid</th>
            <th>Region</th>
            <th>Battery %</th>
            <th>Status</th>
            <th>Facilities Served</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>MG-01</strong></td><td>Northern</td><td style="color:#16a34a;">▭ 72%</td><td>${badge("Stable", "green")}</td><td>7</td><td>Continue standard monitoring</td></tr>
          <tr><td><strong>MG-02</strong></td><td>Coastal</td><td style="color:#f97316;">▭ 48%</td><td>${badge("Watch", "yellow")}</td><td>5</td><td>Review storage reserve trend</td></tr>
          <tr><td><strong>MG-03</strong></td><td>Urban</td><td style="color:#16a34a;">▭ 82%</td><td>${badge("Stable", "green")}</td><td>10</td><td>Candidate for load expansion</td></tr>
          <tr><td><strong>MG-04</strong></td><td>Northern Clinic</td><td style="color:#dc2626;">▭ 18%</td><td>${badge("Warning", "red")}</td><td>6</td><td>Dispatch battery support and reduce noncritical loads</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderEquity() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☷", "blue", "Rural Communities Served", "42", "Priority access communities")}
      ${metricCard("🎓", "green", "Schools Powered", "220", "Long-term scale scenario")}
      ${metricCard("♡", "red", "Clinics Powered", "140", "Long-term scale scenario")}
      ${metricCard("✦", "purple", "Girls Education STEM Centers", "18", "Education and workforce pathway")}
      ${metricCard("$", "yellow", "Affordability Improvement", "31%", "Estimated energy burden improvement")}
      ${metricCard("◷", "blue", "Evening Study Hours Added", "5.2", "Estimated additional study hours")}
    </div>

    <div class="alert info">
      <div>
        <strong>Priority Recommendation</strong>
        <p>Northern Rural Cluster should receive Phase 2 storage expansion due to lower reliability and higher energy burden.</p>
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
      ${metricCard("◷", "purple", "Outage Response Target", "Under 4 hrs", "Service restoration target")}
      ${metricCard("🔒", "blue", "Cybersecurity Readiness", "84%", "Monitoring and data integrity controls")}
      ${metricCard("☔", "cyan", "Extreme Weather Readiness", "90%", "Storm, heat, and environmental exposure planning")}
      ${metricCard("✓", "green", "Safety Incidents Target", "0", "Zero major incidents")}
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Active Risk Monitoring</h3>
        <p class="panel-subtitle">Current system threats and alerts</p>
        <div class="mini-list">
          <div class="mini-item" style="background:#fee2e2;"><strong>⚠ Low Battery Reserve</strong><p>High priority risk for Northern Clinic Cluster.</p></div>
          <div class="mini-item" style="background:#fef3c7;"><strong>⚠ Storm Risk</strong><p>Medium risk; monitor forecast and secure exposed equipment.</p></div>
          <div class="mini-item" style="background:#dcfce7;"><strong>△ Cybersecurity Alert</strong><p>Low risk; continue routine access and data review.</p></div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Critical Facility Priority Stack</h3>
        <p class="panel-subtitle">Power restoration priority order</p>
        <div class="mini-list">
          <div class="mini-item"><strong>1. Clinics and vaccine refrigeration</strong><p>Highest priority health and safety load.</p></div>
          <div class="mini-item"><strong>2. Schools</strong><p>Learning continuity and community support.</p></div>
          <div class="mini-item"><strong>3. Water and community hubs</strong><p>Public health and daily life stability.</p></div>
          <div class="mini-item"><strong>4. Small business and agriculture</strong><p>Productive use and local economic continuity.</p></div>
        </div>
      </section>
    </div>
  `;
}

function renderDecision() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("$", "yellow", "Funding Readiness", "65%", "Grant, DFI, public/private, local partner mix")}
      ${metricCard("⌖", "blue", "Site Readiness", "85%", "Community and load model defined")}
      ${metricCard("▤", "yellow", "Permitting Readiness", "In Progress", "Environmental, utility, local authority")}
      ${metricCard("🛒", "green", "Procurement Readiness", "Planned", "PV, battery, controls, interconnection gear")}
      ${metricCard("🔧", "cyan", "O&M Readiness", "Drafted", "Inspection, spares, escalation, reserve planning")}
      ${metricCard("▣", "purple", "Overall Readiness Score", "72%", "Composite implementation readiness")}
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Funding Stack</h3>
        <p class="panel-subtitle">Blended finance pathway for implementation</p>
        <div class="mini-list">
          <div class="mini-item"><strong>Grants</strong><p>Climate funds, education funds, energy access grants, and philanthropic support.</p></div>
          <div class="mini-item"><strong>Development Finance</strong><p>DFIs, concessional lending, AfDB-style pathways, and public-private investment.</p></div>
          <div class="mini-item"><strong>Public / Private Partners</strong><p>Government, utility, schools, clinics, vendors, and technology partners.</p></div>
          <div class="mini-item"><strong>O&M Reserve</strong><p>Maintenance fund, replacement planning, and technology refresh reserve.</p></div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Decision Matrix</h3>
        <p class="panel-subtitle">Realism indicators tied to project planning</p>
        ${progressList([
          ["Site + Load Assessment", "85"],
          ["Community Alignment", "80"],
          ["Permitting Path", "58"],
          ["Equipment Procurement", "62"],
          ["Training Plan", "70"],
          ["Maintenance Reserve", "55"]
        ])}
      </section>
    </div>
  `;
}

function renderMap() {
  return `
    <div class="grid two-col">
      <section class="card map-panel">
        <h3 class="panel-title">Ghana Priority Hub Map</h3>
        <p class="panel-subtitle">Illustrative map view for resilience hubs and expansion corridors</p>
        <div class="map-visual">
          <span class="map-marker marker-1" title="Northern Ghana Hub"></span>
          <span class="map-marker marker-2" title="Water + School Cluster"></span>
          <span class="map-marker marker-3" title="Community Enterprise Hub"></span>
          <span class="map-marker marker-4" title="Clinic Cluster Risk"></span>

          <div class="card map-card">
            <h3 class="panel-title">Northern Ghana Priority Zone</h3>
            <p class="panel-subtitle">Tamale-centered resilience and productive-use energy strategy</p>
            <div class="chips">
              <span class="chip">Clinic</span>
              <span class="chip">School</span>
              <span class="chip">Water</span>
              <span class="chip">Enterprise</span>
            </div>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Regional Overlay</h3>
        <p class="panel-subtitle">How the map supports decision-making</p>
        <div class="mini-list">
          <div class="mini-item"><strong>Reliability Score</strong><p>Identifies areas with high outage burden and critical-load vulnerability.</p></div>
          <div class="mini-item"><strong>Access Gap</strong><p>Highlights communities where clinics, schools, water systems, and enterprise loads need stronger power support.</p></div>
          <div class="mini-item"><strong>Readiness Score</strong><p>Combines site access, stakeholder alignment, permitting, and procurement feasibility.</p></div>
          <div class="mini-item"><strong>Expansion Corridor</strong><p>Shows how a proven pilot can scale into a regional hub model.</p></div>
        </div>
      </section>
    </div>
  `;
}

function renderDictionary() {
  const rows = [
    ["Critical Load Uptime", "Percent of time priority loads remain powered.", "Reliability", "Sensors / outage logs", "Daily"],
    ["Battery Reserve", "Available storage compared with usable storage capacity.", "Resilience", "Battery monitoring", "Hourly"],
    ["Solar Output", "Current or estimated photovoltaic generation.", "Reliability", "Inverter / meter data", "Hourly"],
    ["Outage Hours Avoided", "Estimated outage time reduced by solar + storage.", "Reliability", "Grid logs + system data", "Monthly"],
    ["Clinics Powered", "Number of clinics served by reliable energy.", "Community Impact", "Facility records", "Monthly"],
    ["Schools Powered", "Number of schools served by reliable energy.", "Community Impact", "Facility records", "Monthly"],
    ["Water Access Reliability", "Availability of energy for water pumping or treatment.", "Community Impact", "Pump runtime", "Daily"],
    ["Funding Readiness", "Progress toward viable funding and partnership package.", "Finance", "Project records", "Monthly"],
    ["Permitting Readiness", "Progress through environmental, utility, and local approvals.", "Implementation", "Permit tracker", "Monthly"],
    ["CO₂ Avoided", "Estimated emissions displaced by clean power.", "Environmental", "Energy model", "Monthly"]
  ];

  return `
    <section class="card">
      <h3 class="panel-title">KPI Data Dictionary</h3>
      <p class="panel-subtitle">Definitions, categories, sources, and frequency</p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Definition</th>
            <th>Category</th>
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
    <div class="grid scenario-grid">
      <section class="card scenario-card">
        <h3>Scenario A</h3>
        <p class="panel-subtitle">Pilot Hub Only</p>
        <div class="scenario-score">72</div>
        <p class="subtext">Best for proving technical feasibility and collecting baseline data.</p>
        <div class="chips">
          <span class="chip">Lower Cost</span>
          <span class="chip">Lower Risk</span>
        </div>
      </section>

      <section class="card scenario-card">
        <h3>Scenario B</h3>
        <p class="panel-subtitle">Hub + Expanded Community Loads</p>
        <div class="scenario-score">86</div>
        <p class="subtext">Best balance of impact, realism, and judge-facing proof of community value.</p>
        <div class="chips">
          <span class="chip">Recommended</span>
          <span class="chip">High Impact</span>
        </div>
      </section>

      <section class="card scenario-card">
        <h3>Scenario C</h3>
        <p class="panel-subtitle">Corridor Expansion</p>
        <div class="scenario-score">80</div>
        <p class="subtext">Best for long-term scale once the pilot model is validated.</p>
        <div class="chips">
          <span class="chip">Scalable</span>
          <span class="chip">Higher Funding Need</span>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Scenario Comparison Matrix</h3>
      <p class="panel-subtitle">Compares cost, reliability, community impact, risk, and scalability</p>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>CAPEX</th>
            <th>Reliability</th>
            <th>Community Impact</th>
            <th>Risk</th>
            <th>Scalability</th>
            <th>Readiness</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>A: Pilot Hub Only</strong></td><td>Low</td><td>Medium</td><td>Medium</td><td>Low</td><td>Medium</td><td>${badge("High", "green")}</td></tr>
          <tr><td><strong>B: Hub + Expanded Loads</strong></td><td>Medium</td><td>High</td><td>High</td><td>Medium</td><td>High</td><td>${badge("Recommended", "blue")}</td></tr>
          <tr><td><strong>C: Corridor Expansion</strong></td><td>High</td><td>High</td><td>Very High</td><td>High</td><td>Very High</td><td>${badge("Future Phase", "yellow")}</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderRoadmap() {
  return `
    <div class="grid roadmap">
      <article class="phase-card pilot">
        <div class="phase-head"><span class="phase-num">1</span> 0–3 Years</div>
        <h3>Pilot</h3>
        <h4>Prove the Model</h4>
        <ul>
          <li>Finalize site selection and load assessment</li>
          <li>Voice of Customer and stakeholder alignment</li>
          <li>Financing package design: grants, DFIs, local partners</li>
          <li>Permitting path: environmental, utility, local authority</li>
          <li>Equipment procurement plan: PV, batteries, controls, interconnection gear</li>
          <li>Contractor selection and implementation schedule</li>
          <li>Baseline KPI dashboard and risk register</li>
        </ul>
        <div class="gate">
          <strong>Milestone Gates</strong>
          <ul>
            <li>Feasibility approved</li>
            <li>Funding commitments secured</li>
            <li>Major permits submitted or in process</li>
            <li>First hub procurement released</li>
          </ul>
        </div>
      </article>

      <article class="phase-card scale">
        <div class="phase-head"><span class="phase-num">2</span> 3–10 Years</div>
        <h3>Scale</h3>
        <h4>Replicate What Works</h4>
        <ul>
          <li>Expand to additional schools, clinics, and water assets</li>
          <li>Phase 2 financing: blended capital, concessional debt, reinvested savings</li>
          <li>Bulk equipment procurement to reduce unit cost</li>
          <li>Standardize designs, BoQ, and contractor packages</li>
          <li>Workforce pipeline and local technician training</li>
          <li>Strengthen O&M model, spare parts, and service contracts</li>
          <li>KPI-driven improvement across new sites</li>
        </ul>
        <div class="gate">
          <strong>Milestone Gates</strong>
          <ul>
            <li>Multiple hubs commissioned</li>
            <li>Cost per site reduced</li>
            <li>O&M program operational</li>
            <li>Regional deployment model validated</li>
          </ul>
        </div>
      </article>

      <article class="phase-card sustain">
        <div class="phase-head"><span class="phase-num">3</span> 10+ Years</div>
        <h3>Sustain</h3>
        <h4>Build Long-Term Energy Independence</h4>
        <ul>
          <li>Transition to community-led ownership and governance</li>
          <li>Establish maintenance reserve and replacement planning</li>
          <li>Long-term tariff, revenue, and financial sustainability review</li>
          <li>Technology refresh cycles for batteries, inverters, and monitoring</li>
          <li>Continued compliance, audits, and resilience upgrades</li>
          <li>Expand corridor-to-region strategy using proven model</li>
          <li>Use dashboard evidence to attract next-wave investment</li>
        </ul>
        <div class="gate">
          <strong>Milestone Gates</strong>
          <ul>
            <li>Long-term reserve funded</li>
            <li>Local ownership active</li>
            <li>Technology refresh planned</li>
            <li>Expansion pipeline financed</li>
          </ul>
        </div>
      </article>
    </div>
  `;
}

function renderAbout() {
  return `
    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Project Purpose</h3>
        <p>The PowerLink Ghana 2050 Command Center is a student-built dashboard prototype for the Girls With Energy Challenge. It shows how solar generation, battery storage, smart monitoring, funding readiness, and community-centered design can support reliable energy access in Ghana.</p>

        <p>The dashboard is designed around measurable proof: reliability, impact, safety, finance, environment, and implementation readiness.</p>

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
          <div class="mini-item"><strong>Energy Reliability</strong><p>Uptime, battery autonomy, outage hours avoided, load served.</p></div>
          <div class="mini-item"><strong>Community Impact</strong><p>Clinics, schools, water access, productive use, rural communities.</p></div>
          <div class="mini-item"><strong>Safety & Resilience</strong><p>Safety incidents, weather readiness, backup hours, priority restoration.</p></div>
          <div class="mini-item"><strong>Cost & Finance</strong><p>CAPEX, OPEX, funding readiness, maintenance reserve, cost per beneficiary.</p></div>
          <div class="mini-item"><strong>Environmental / SDG Impact</strong><p>CO₂ avoided, renewable share, diesel avoided, SDG alignment.</p></div>
          <div class="mini-item"><strong>Implementation Readiness</strong><p>Site assessment, permitting, procurement, training, O&M, risk register.</p></div>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">SDG Alignment</h3>
      <p class="panel-subtitle">Development goals supported by the PowerLink Ghana 2050 strategy</p>
      <div class="grid sdg-grid">
        <div class="sdg"><strong>SDG 3</strong>Health and Well-Being</div>
        <div class="sdg"><strong>SDG 4</strong>Quality Education</div>
        <div class="sdg"><strong>SDG 6</strong>Clean Water and Sanitation</div>
        <div class="sdg"><strong>SDG 7</strong>Affordable and Clean Energy</div>
        <div class="sdg"><strong>SDG 8</strong>Decent Work and Economic Growth</div>
        <div class="sdg"><strong>SDG 9</strong>Industry, Innovation, and Infrastructure</div>
        <div class="sdg"><strong>SDG 13</strong>Climate Action</div>
        <div class="sdg"><strong>SDG 17</strong>Partnerships for the Goals</div>
      </div>
    </section>
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

init();
