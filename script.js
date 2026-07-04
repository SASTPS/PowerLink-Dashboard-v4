const pages = [
  {
    id: "home",
    icon: "⌂",
    title: "Home Dashboard",
    subtitle: "PowerLink Ghana 2050 operating snapshot for the Northern Ghana corridor",
    status: "Stable",
    render: renderHome
  },
  {
    id: "live",
    icon: "↯",
    title: "Live Operations",
    subtitle: "Modeled operating status for solar, storage, critical loads, and corridor hubs",
    status: "All Regions",
    render: renderLive
  },
  {
    id: "equity",
    icon: "☷",
    title: "Equity & Access",
    subtitle: "Tracking access, affordability, schools, clinics, water, and productive-use benefits",
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
    subtitle: "Priority recommendations for budget, reliability, equity, climate finance, and feasibility",
    status: "Action-ready",
    render: renderDecision
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Geographic view of the Tamale-centered corridor, hub clusters, and priority loads",
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
    subtitle: "Before / current / Phase 1 / climate-financed comparison across core outcomes",
    status: "Scenario model",
    render: renderScenario
  },
  {
    id: "roadmap",
    icon: "→",
    title: "Implementation Roadmap",
    subtitle: "Phase 1 corridor buildout, scale-up, and long-term sustainment pathway",
    status: "2050 pathway",
    render: renderRoadmap
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
  nav.innerHTML = "";

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
      ${metricCard("$", "yellow", "Base Phase 1 Budget", "$500M", "Core Northern Ghana corridor system investment")}
      ${metricCard("♻", "green", "Climate Finance Stretch", "+$75M–$125M", "Additional resilience, storage, and climate-impact financing")}
      ${metricCard("⌖", "blue", "Target Corridor Hubs", "12", "Tamale-centered resilience hub network")}
      ${metricCard("▤", "purple", "Critical Sites Supported", "48", "12 clinics/CHPS + 24 schools + 12 water points")}
      ${metricCard("⚙", "green", "Productive-Use Loads", "50+", "Agriculture, cold storage, small business, and community loads")}
      ${metricCard("☷", "cyan", "Direct Corridor Reach", "45k–75k", "Planning estimate for daily corridor beneficiaries")}
    </div>

    <div class="alert">
      <div>
        <strong>Budget Strategy: $500M Base + Climate Finance Stretch</strong>
        <p>The base Phase 1 budget funds the core PowerLink Ghana corridor system. Additional climate finance can expand storage, resilience hardening, carbon tracking, climate adaptation, and long-term sustainability.</p>
      </div>
      <button class="btn">Review Budget Plan</button>
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Phase 1 Budget Allocation</h3>
        <p class="panel-subtitle">Base $500M system investment aligned to project priorities</p>
        <table>
          <thead>
            <tr>
              <th>Budget Category</th>
              <th>Allocation</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Solar generation</td><td><strong>$115M</strong></td><td>PV generation capacity and clean power infrastructure</td></tr>
            <tr><td>Battery storage</td><td><strong>$95M</strong></td><td>Storage, backup power, and priority-load resilience</td></tr>
            <tr><td>Distribution + grid integration</td><td><strong>$75M</strong></td><td>Connection, interconnection, distribution, and reliability upgrades</td></tr>
            <tr><td>Controls + cybersecurity</td><td><strong>$55M</strong></td><td>Monitoring, smart controls, data systems, and cyber protection</td></tr>
            <tr><td>Productive-use energy</td><td><strong>$50M</strong></td><td>Agriculture, enterprise loads, cold storage, and local economic use</td></tr>
            <tr><td>School + clinic hubs</td><td><strong>$45M</strong></td><td>Critical community hubs, clinics, CHPS sites, and schools</td></tr>
            <tr><td>Workforce training</td><td><strong>$25M</strong></td><td>Local technician training and long-term operating capacity</td></tr>
            <tr><td>Affordability fund</td><td><strong>$25M</strong></td><td>Access support, affordability protection, and equity measures</td></tr>
            <tr><td>Permitting + contingency</td><td><strong>$15M</strong></td><td>Permits, studies, risk reserve, and deployment contingency</td></tr>
          </tbody>
        </table>
      </section>

      <section class="card">
        <h3 class="panel-title">Command Center Readiness</h3>
        <p class="panel-subtitle">Readiness gates before release of major funds</p>
        ${progressList([
          ["Site + Load Assessment", "70"],
          ["Community / VoC Alignment", "65"],
          ["Technical Design", "62"],
          ["Funding Package", "55"],
          ["Permitting Path", "35"],
          ["O&M / Training Plan", "55"]
        ])}

        <div class="alert info" style="margin-top: 22px;">
          <div>
            <strong>Climate finance is a stretch layer.</strong>
            <p>It can fund additional storage, resilience hardening, climate adaptation, emissions tracking, and expansion beyond the base $500M system plan.</p>
          </div>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Current Operating Priorities</h3>
      <p class="panel-subtitle">What the dashboard would tell the implementation team for the Phase 1 corridor</p>
      <table>
        <thead>
          <tr>
            <th>Priority</th>
            <th>Corridor Asset</th>
            <th>Issue</th>
            <th>Recommended Action</th>
            <th>Budget Link</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1</strong></td>
            <td>Clinic / CHPS compound</td>
            <td>Critical-load reliability must be protected first</td>
            <td>Use storage, controls, and hub funds to protect health loads</td>
            <td>Storage + school/clinic hubs</td>
            <td>${badge("High Priority", "red")}</td>
          </tr>
          <tr>
            <td><strong>2</strong></td>
            <td>School + evening study load</td>
            <td>Evening demand must not compete with clinic reserve</td>
            <td>Schedule charging and lighting loads around battery thresholds</td>
            <td>Controls + affordability fund</td>
            <td>${badge("Watch", "yellow")}</td>
          </tr>
          <tr>
            <td><strong>3</strong></td>
            <td>Water point / pump load</td>
            <td>Pump runtime should be scheduled during solar production</td>
            <td>Prioritize daylight pumping and monitor water-system runtime</td>
            <td>Solar + productive-use energy</td>
            <td>${badge("Operational Planning", "blue")}</td>
          </tr>
          <tr>
            <td><strong>4</strong></td>
            <td>Productive-use loads</td>
            <td>Enterprise loads should scale only after reliability is proven</td>
            <td>Add productive loads after stable hub performance is demonstrated</td>
            <td>Productive-use energy</td>
            <td>${badge("Phase Gate", "green")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderLive() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Modeled Solar Dispatch", "48 MW", "Illustrative operating output across Phase 1 corridor")}
      ${metricCard("▭", "green", "Aggregate Storage Level", "55%", "Modeled state of charge across corridor storage assets")}
      ${metricCard("⚡", "blue", "Priority Load Demand", "18.4 MW", "Clinic, school, water, hub, and productive-use loads")}
      ${metricCard("▤", "purple", "Critical Sites Online", "46 / 48", "Modeled uptime for schools, clinics/CHPS, and water points")}
      ${metricCard("🔧", "yellow", "Maintenance Tickets", "3 Open", "Active issues requiring technician or vendor response")}
      ${metricCard("☔", "cyan", "Weather / Dust Risk", "Medium", "Heat, dust, rainfall, and storm exposure")}
    </div>

    <section class="card">
      <h3 class="panel-title">Corridor Hub Status</h3>
      <p class="panel-subtitle">Operational status across modeled Phase 1 hub clusters</p>
      <table>
        <thead>
          <tr>
            <th>Hub ID</th>
            <th>Cluster</th>
            <th>Battery %</th>
            <th>Reserve Hours</th>
            <th>Critical Sites</th>
            <th>Load Status</th>
            <th>Status</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>PLG-01</strong></td>
            <td>Tamale Core Health + Education Hub</td>
            <td style="color:#16a34a;">▭ 72%</td>
            <td>13.6 hrs</td>
            <td>6</td>
            <td>Normal</td>
            <td>${badge("Stable", "green")}</td>
            <td>Continue standard monitoring</td>
          </tr>
          <tr>
            <td><strong>PLG-02</strong></td>
            <td>Savelugu School + Water Hub</td>
            <td style="color:#f97316;">▭ 48%</td>
            <td>7.2 hrs</td>
            <td>4</td>
            <td>Elevated evening demand</td>
            <td>${badge("Watch", "yellow")}</td>
            <td>Shift noncritical loads to daylight hours</td>
          </tr>
          <tr>
            <td><strong>PLG-03</strong></td>
            <td>Tolon Productive-Use Hub</td>
            <td style="color:#16a34a;">▭ 82%</td>
            <td>15.1 hrs</td>
            <td>5</td>
            <td>Normal</td>
            <td>${badge("Stable", "green")}</td>
            <td>Candidate for productive-use expansion</td>
          </tr>
          <tr>
            <td><strong>PLG-04</strong></td>
            <td>Yendi Clinic / CHPS Cluster</td>
            <td style="color:#dc2626;">▭ 18%</td>
            <td>2.8 hrs</td>
            <td>4</td>
            <td>Priority load protection</td>
            <td>${badge("Warning", "red")}</td>
            <td>Reserve power for health loads and dispatch maintenance</td>
          </tr>
          <tr>
            <td><strong>PLG-05</strong></td>
            <td>Karaga Water + Clinic Hub</td>
            <td style="color:#16a34a;">▭ 64%</td>
            <td>10.4 hrs</td>
            <td>5</td>
            <td>Normal</td>
            <td>${badge("Stable", "green")}</td>
            <td>Monitor pump runtime and reserve threshold</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderEquity() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("⌖", "blue", "Corridor Hub Catchments", "12", "Phase 1 hub service areas")}
      ${metricCard("🎓", "green", "Schools Supported", "24", "Planning target across the Phase 1 corridor")}
      ${metricCard("♡", "red", "Clinics / CHPS Supported", "12", "Health loads protected first")}
      ${metricCard("💧", "cyan", "Water Points Supported", "12", "Pump or water-system reliability")}
      ${metricCard("$", "yellow", "Affordability Fund", "$25M", "Equity guardrails and access support")}
      ${metricCard("⚙", "purple", "Productive-Use Loads", "50+", "Agriculture, cold storage, and enterprise uses")}
    </div>

    <div class="alert info">
      <div>
        <strong>Priority Recommendation</strong>
        <p>Focus equity measurement on the corridor assets most directly affected by reliable power: clinics/CHPS sites, schools, water points, community hubs, and productive-use loads.</p>
        <div class="chips">
          <span class="chip">Corridor Scale</span>
          <span class="chip">Clinic First</span>
          <span class="chip">School + Water Co-benefits</span>
          <span class="chip">Affordability Guardrail</span>
        </div>
      </div>
    </div>

    <section class="card">
      <h3 class="panel-title">Access Improvement by Corridor Asset</h3>
      <p class="panel-subtitle">Modeled baseline vs proposed reliable-service target</p>
      ${barChart()}
    </section>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Community Outcome Logic</h3>
      <p class="panel-subtitle">How the corridor investment becomes measurable community value</p>
      <table>
        <thead>
          <tr>
            <th>Corridor Need</th>
            <th>Energy Intervention</th>
            <th>Measured Outcome</th>
            <th>Scale Gate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clinic / CHPS reliability</td>
            <td>Protected solar + battery critical-load circuit</td>
            <td>Hours powered, cold-chain continuity, outage events avoided</td>
            <td>${badge("Must Prove First", "red")}</td>
          </tr>
          <tr>
            <td>School access</td>
            <td>Lighting, charging, device support</td>
            <td>Evening study hours and school operating continuity</td>
            <td>${badge("Scale After Stability", "blue")}</td>
          </tr>
          <tr>
            <td>Water reliability</td>
            <td>Daylight pump scheduling and storage-aware operation</td>
            <td>Pump runtime, days of water access supported</td>
            <td>${badge("Operational KPI", "green")}</td>
          </tr>
          <tr>
            <td>Local enterprise</td>
            <td>Productive-use allocation after critical loads are protected</td>
            <td>Business hours powered without reducing clinic reserve</td>
            <td>${badge("Phase Gate", "yellow")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderResilience() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🛡", "green", "Critical Load Coverage", "96%", "Modeled coverage for clinics, schools, water, and hubs")}
      ${metricCard("▭", "blue", "Battery Hours Remaining", "10.4 avg", "Average modeled reserve across corridor hubs")}
      ${metricCard("◷", "purple", "Outage Response Target", "Under 4 hrs", "Restoration response target")}
      ${metricCard("🔒", "blue", "Cybersecurity Readiness", "84%", "Monitoring and data-integrity controls")}
      ${metricCard("☔", "cyan", "Extreme Weather Readiness", "90%", "Storm, heat, dust, and rainfall exposure planning")}
      ${metricCard("✓", "green", "Inspection Completion", "Monthly", "Safety and O&M checklist")}
    </div>

    <div class="grid two-col">
      <section class="card">
        <h3 class="panel-title">Active Risk Monitoring</h3>
        <p class="panel-subtitle">Current system threats and operating alerts</p>
        <div class="risk-list">
          <div class="risk-row risk-high">
            <strong>⚠ Low Battery Reserve: Yendi Clinic / CHPS Cluster</strong>
            <span>High</span>
          </div>
          <div class="risk-row risk-medium">
            <strong>⚠ Dust + Heat Derating Risk</strong>
            <span>Medium</span>
          </div>
          <div class="risk-row risk-low">
            <strong>△ Dashboard Data Integrity Check</strong>
            <span>Low</span>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Critical Facility Priority Stack</h3>
        <p class="panel-subtitle">Power restoration and load protection order</p>
        <div class="priority-stack">
          <div class="stack-row"><span>1</span><strong>Clinics / CHPS sites and vaccine refrigeration</strong></div>
          <div class="stack-row"><span>2</span><strong>Water points and community health loads</strong></div>
          <div class="stack-row"><span>3</span><strong>Schools and evening study support</strong></div>
          <div class="stack-row"><span>4</span><strong>Productive-use loads: agriculture and enterprise</strong></div>
        </div>
      </section>
    </div>
  `;
}

function renderDecision() {
  return `
    <div class="decision-tabs">
      <span class="decision-chip blue-chip">Technical Design</span>
      <span class="decision-chip purple-chip">Equity Access</span>
      <span class="decision-chip green-chip">Resilience</span>
      <span class="decision-chip cyan-chip">Climate Impact</span>
      <span class="decision-chip neutral-chip">Budget Feasibility</span>
    </div>

    <section class="priority-card high-priority">
      <div class="priority-label">High Priority</div>
      <div class="priority-body">
        <div class="icon red">▭</div>
        <div>
          <h3>Protect Clinic / CHPS Critical Loads First</h3>
          <p>The first technical gate is proving that the Phase 1 corridor system can protect health loads before adding more community or enterprise demand.</p>
          <div class="mini-metrics">
            <div><span>Storage Allocation</span><strong>$95M</strong></div>
            <div><span>Hub Allocation</span><strong>$45M</strong></div>
            <div><span>Response Target</span><strong>&lt; 4 hrs</strong></div>
          </div>
          <div class="chips">
            <span class="chip">Resilience</span>
            <span class="chip">Health Load Priority</span>
            <span class="chip">Critical Infrastructure</span>
          </div>
        </div>
        <button class="btn">Review Details</button>
      </div>
    </section>

    <section class="priority-card medium-priority">
      <div class="priority-label">Budget + Funding Gate</div>
      <div class="priority-body">
        <div class="icon yellow">$</div>
        <div>
          <h3>Phase 1 Budget Package</h3>
          <p>The base system budget is $500M. A separate climate-finance stretch can increase total available resources for storage expansion, resilience hardening, emissions tracking, and climate adaptation.</p>
          <div class="mini-metrics">
            <div><span>Base Phase 1 Budget</span><strong>$500M</strong></div>
            <div><span>Climate Finance Stretch</span><strong>+$75M–$125M</strong></div>
            <div><span>Total Potential Package</span><strong>$575M–$625M</strong></div>
          </div>
          <div class="chips">
            <span class="chip">Climate finance</span>
            <span class="chip">Development banks</span>
            <span class="chip">Government alignment</span>
            <span class="chip">Vendor financing</span>
            <span class="chip">Results-based finance</span>
            <span class="chip">O&M reserve</span>
          </div>
        </div>
        <button class="btn">Review Budget</button>
      </div>
    </section>

    <section class="card">
      <h3 class="panel-title">Budget and Implementation Gate Tracker</h3>
      <p class="panel-subtitle">Base budget plus climate-finance stretch layer</p>
      <table>
        <thead>
          <tr>
            <th>Gate</th>
            <th>Budget / Funding Assumption</th>
            <th>What Must Be Proven</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Base Phase 1 budget</td>
            <td><strong>$500M</strong> system investment</td>
            <td>Budget categories match the technical scope and community impact plan</td>
            <td>${badge("Defined", "green")}</td>
          </tr>
          <tr>
            <td>Climate finance stretch</td>
            <td><strong>+$75M–$125M</strong> above base budget</td>
            <td>Climate impact, resilience, emissions reduction, and adaptation benefits</td>
            <td>${badge("Stretch Funding", "blue")}</td>
          </tr>
          <tr>
            <td>Solar generation</td>
            <td><strong>$115M</strong></td>
            <td>Generation sizing, site conditions, interconnection, and procurement plan</td>
            <td>${badge("Core Budget", "green")}</td>
          </tr>
          <tr>
            <td>Battery storage</td>
            <td><strong>$95M</strong></td>
            <td>Autonomy target, load profile, safety controls, and replacement planning</td>
            <td>${badge("Core Budget", "green")}</td>
          </tr>
          <tr>
            <td>Distribution + grid integration</td>
            <td><strong>$75M</strong></td>
            <td>Interconnection pathway, grid support, corridor distribution needs</td>
            <td>${badge("Needs Validation", "yellow")}</td>
          </tr>
          <tr>
            <td>Controls + cybersecurity</td>
            <td><strong>$55M</strong></td>
            <td>Monitoring architecture, dashboard data, controls, and cyber protections</td>
            <td>${badge("Defined", "blue")}</td>
          </tr>
          <tr>
            <td>Productive-use energy</td>
            <td><strong>$50M</strong></td>
            <td>Agriculture, cold storage, enterprise loads, and load-management rules</td>
            <td>${badge("Phase Gate", "yellow")}</td>
          </tr>
          <tr>
            <td>School + clinic hubs</td>
            <td><strong>$45M</strong></td>
            <td>Hub model, facility selection, community governance, and critical-load design</td>
            <td>${badge("Priority", "red")}</td>
          </tr>
          <tr>
            <td>Workforce training</td>
            <td><strong>$25M</strong></td>
            <td>Local operators, technician pipeline, O&M training, knowledge transfer</td>
            <td>${badge("Required", "purple")}</td>
          </tr>
          <tr>
            <td>Affordability fund</td>
            <td><strong>$25M</strong></td>
            <td>Equity guardrails, access support, and affordability measurement</td>
            <td>${badge("Equity", "blue")}</td>
          </tr>
          <tr>
            <td>Permitting + contingency</td>
            <td><strong>$15M</strong></td>
            <td>Environmental, utility, local authority, land/site approvals, risk reserve</td>
            <td>${badge("Needs Validation", "yellow")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderMap() {
  return `
    <div class="grid two-col">
      <section class="card map-panel">
        <h3 class="panel-title">Northern Ghana Corridor Map</h3>
        <p class="panel-subtitle">Illustrative priority-zone map for a Tamale-centered resilience hub model</p>

        <div class="map-visual">
          <div class="ghana-shape"></div>

          <div class="map-marker marker-north"><span></span><strong>Tamale-Centered Hub</strong></div>
          <div class="map-marker marker-clinic"><span></span><strong>Clinic / CHPS Load</strong></div>
          <div class="map-marker marker-school"><span></span><strong>School + Water Load</strong></div>
          <div class="map-marker marker-enterprise"><span></span><strong>Productive-Use Load</strong></div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">Corridor Operating Overlay</h3>
        <p class="panel-subtitle">How the map supports deployment decisions</p>
        <div class="mini-list">
          <div class="mini-item">
            <strong>Base System Investment</strong>
            <p>The $500M Phase 1 budget is shown as a corridor system investment, not a single small pilot installation.</p>
          </div>
          <div class="mini-item">
            <strong>Climate Finance Stretch</strong>
            <p>Additional climate finance can expand storage, resilience hardening, emissions tracking, and adaptation benefits.</p>
          </div>
          <div class="mini-item">
            <strong>Health Load First</strong>
            <p>Clinic and CHPS loads receive first priority during low battery reserve or outage events.</p>
          </div>
          <div class="mini-item">
            <strong>Scale Logic</strong>
            <p>After the first corridor proves uptime, safety, and affordability, the model expands to additional hubs and productive-use zones.</p>
          </div>
        </div>
      </section>
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Corridor Deployment Budget Table</h3>
      <table>
        <thead>
          <tr>
            <th>Investment Layer</th>
            <th>Budget</th>
            <th>Use</th>
            <th>Dashboard KPI Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Base Phase 1 system</strong></td>
            <td>$500M</td>
            <td>Solar, storage, grid integration, controls, hubs, workforce, affordability, permitting</td>
            <td>Implementation Readiness</td>
          </tr>
          <tr>
            <td><strong>Climate finance stretch</strong></td>
            <td>+$75M–$125M</td>
            <td>Extra storage, resilience hardening, climate adaptation, carbon tracking, and expansion reserve</td>
            <td>Environmental / SDG Impact</td>
          </tr>
          <tr>
            <td><strong>Total potential package</strong></td>
            <td>$575M–$625M</td>
            <td>Base deployment plus climate-aligned enhancements</td>
            <td>Cost & Finance</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderDictionary() {
  const rows = [
    ["Base Phase 1 Budget", "Core system investment for the Northern Ghana corridor.", "Cost & Finance", "Budget model", "Per phase"],
    ["Climate Finance Stretch", "Additional financing above the base budget for resilience, storage, climate adaptation, and emissions tracking.", "Environmental / Finance", "Funding model", "Per phase"],
    ["Critical Load Coverage", "Percent of priority clinic, school, water, and hub loads served during normal and outage conditions.", "Energy Reliability", "Metering / outage logs", "Daily"],
    ["Battery Reserve", "Available storage compared with usable storage capacity.", "Resilience", "Battery monitoring", "Hourly"],
    ["Battery Autonomy", "Estimated hours the system can support priority loads.", "Resilience", "Load model + storage data", "Hourly"],
    ["Solar Dispatch", "Modeled or measured photovoltaic output serving corridor loads.", "Energy Reliability", "Inverter / meter data", "Hourly"],
    ["Clinic / CHPS Sites Supported", "Health facilities supported through protected power and backup energy.", "Community Impact", "Facility list", "Monthly"],
    ["Schools Supported", "Schools served through lighting, charging, and reliability improvements.", "Community Impact", "Facility list", "Monthly"],
    ["Water Points Supported", "Water pumping or water-system loads supported by the energy system.", "Community Impact", "Pump runtime data", "Daily"],
    ["Productive-Use Loads", "Agriculture, cold storage, small business, and enterprise loads supported after critical loads are protected.", "Economic Impact", "Load tracker", "Monthly"],
    ["Affordability Fund", "Budget allocation for access support, affordability protection, and equity measures.", "Cost & Equity", "Budget model", "Quarterly"],
    ["Permitting Readiness", "Progress through environmental, utility, local authority, and land/site approvals.", "Implementation", "Permit tracker", "Monthly"],
    ["O&M Readiness", "Preparedness for training, maintenance, inspections, spares, and escalation support.", "Implementation", "O&M plan", "Monthly"],
    ["CO₂ Avoided", "Estimated emissions displaced by clean power and reduced diesel dependence.", "Environmental / SDG", "Energy model", "Monthly"]
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
        <strong>Scenario Comparison</strong>
        <p>This view compares the baseline condition, current readiness, the base $500M Phase 1 corridor plan, and the climate-financed stretch scenario.</p>
      </div>
    </div>

    <div class="grid three-col">
      ${scenarioSummary("Current Readiness", "Planning status before full Phase 1 deployment", "55%", "blue")}
      ${scenarioSummary("Base Phase 1 Plan", "$500M corridor system investment", "$500M", "green")}
      ${scenarioSummary("Climate Finance Stretch", "Additional climate-aligned funding above base budget", "+$75M–$125M", "gray")}
    </div>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Metric Comparison Across Scenarios</h3>
      <p class="panel-subtitle">Baseline, current readiness, base Phase 1, and climate-financed stretch</p>
      ${comparisonBars("Critical Facility Coverage", "38", "62", "88", "% Sites")}
      ${comparisonBars("Priority Load Reliability", "52", "68", "95", "% Uptime")}
      ${comparisonBars("Storage Resilience", "30", "55", "90", "Index")}
      ${comparisonBars("Affordability Protection", "20", "45", "80", "Index")}
      ${comparisonBars("Climate Impact Tracking", "10", "40", "92", "MRV Readiness")}
    </section>

    <section class="card" style="margin-top: 24px;">
      <h3 class="panel-title">Scenario Selection Logic</h3>
      <table>
        <thead>
          <tr>
            <th>Scenario</th>
            <th>Budget</th>
            <th>Strength</th>
            <th>Concern</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Current Readiness</strong></td>
            <td>Pre-deployment planning</td>
            <td>Allows careful site, load, and stakeholder validation</td>
            <td>Not enough to prove operational impact</td>
            <td>${badge("Planning Stage", "blue")}</td>
          </tr>
          <tr>
            <td><strong>Base Phase 1</strong></td>
            <td>$500M</td>
            <td>Funds the core corridor system: solar, storage, controls, hubs, workforce, affordability, and permitting</td>
            <td>Requires strong implementation governance</td>
            <td>${badge("Recommended Base", "green")}</td>
          </tr>
          <tr>
            <td><strong>Climate Finance Stretch</strong></td>
            <td>+$75M–$125M</td>
            <td>Adds storage depth, resilience hardening, climate adaptation, and emissions tracking</td>
            <td>Must be justified through measurable climate and resilience outcomes</td>
            <td>${badge("Stretch Layer", "yellow")}</td>
          </tr>
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
        <h3>Phase 1</h3>
        <h4>Build the Northern Corridor Backbone</h4>
        <ul>
          <li>Deploy the $500M base Phase 1 system investment</li>
          <li>Prioritize Tamale-centered corridor hubs</li>
          <li>Protect clinic / CHPS, school, water, and community hub loads first</li>
          <li>Release solar, storage, grid integration, controls, and hub investments through gated milestones</li>
          <li>Use climate finance stretch for additional storage, resilience hardening, and climate impact tracking</li>
          <li>Establish baseline KPI dashboard, risk register, O&M model, and workforce training pipeline</li>
        </ul>
        <div class="gate">
          <strong>Milestone Gates</strong>
          <ul>
            <li>$500M base budget allocated</li>
            <li>Funding package and partner roles confirmed</li>
            <li>Permitting pathway validated</li>
            <li>Critical-load protection tested</li>
          </ul>
        </div>
      </article>

      <article class="phase-card scale">
        <div class="phase-head"><span class="phase-num">2</span> 3–10 Years</div>
        <h3>Scale</h3>
        <h4>Replicate What Works</h4>
        <ul>
          <li>Expand proven hub model to additional corridor communities</li>
          <li>Standardize designs, equipment packages, data systems, and contractor scopes</li>
          <li>Use performance data to refine storage sizing and load prioritization</li>
          <li>Increase productive-use loads only after reliability targets are maintained</li>
          <li>Build local technician capacity and O&M reserve funding</li>
          <li>Use dashboard evidence to secure next-wave funding</li>
        </ul>
        <div class="gate">
          <strong>Milestone Gates</strong>
          <ul>
            <li>≥95% critical-load uptime maintained</li>
            <li>No major safety incidents</li>
            <li>Cost and reliability data validated</li>
            <li>Scale financing secured</li>
          </ul>
        </div>
      </article>

      <article class="phase-card sustain">
        <div class="phase-head"><span class="phase-num">3</span> 10+ Years</div>
        <h3>Sustain</h3>
        <h4>Build Long-Term Energy Independence</h4>
        <ul>
          <li>Transition to community-led ownership and governance</li>
          <li>Maintain O&M reserves and technology-refresh planning</li>
          <li>Continue compliance, safety audits, and cyber/data integrity reviews</li>
          <li>Use climate and performance data to justify reinvestment</li>
          <li>Expand from corridor model to broader regional replication where feasible</li>
          <li>Keep the KPI dashboard as the long-term accountability system</li>
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
        <p>The PowerLink Ghana 2050 Command Center is a dashboard prototype for the Girls With Energy Challenge. It shows how a $500M Phase 1 investment in solar generation, battery storage, grid integration, controls, workforce training, affordability, and critical community hubs can support a Northern Ghana corridor strategy.</p>

        <div class="alert info" style="margin-top: 18px;">
          <div>
            <strong>If we cannot measure it, we cannot prove it worked — or improve it.</strong>
            <p>This dashboard turns the proposal into a measurable performance and accountability system.</p>
          </div>
        </div>
      </section>

      <section class="card">
        <h3 class="panel-title">KPI Families</h3>
        <div class="mini-list">
          <div class="mini-item"><strong>Energy Reliability</strong><p>Critical-load uptime, battery reserve, solar dispatch, outage response, and hub performance.</p></div>
          <div class="mini-item"><strong>Community Impact</strong><p>Clinics/CHPS, schools, water points, productive-use loads, affordability, and corridor beneficiaries.</p></div>
          <div class="mini-item"><strong>Safety & Resilience</strong><p>Safety incidents, weather readiness, backup hours, cybersecurity, and restoration priority.</p></div>
          <div class="mini-item"><strong>Cost & Finance</strong><p>$500M base budget, climate finance stretch, procurement readiness, and O&M reserve planning.</p></div>
          <div class="mini-item"><strong>Environmental / SDG Impact</strong><p>CO₂ avoided, diesel displacement, renewable share, climate adaptation, and SDG alignment.</p></div>
          <div class="mini-item"><strong>Implementation Readiness</strong><p>Site assessment, permitting, procurement, training, O&M model, governance, and risk register.</p></div>
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
          <rect x="90" y="125" width="70" height="95" rx="4" />
          <rect x="280" y="105" width="70" height="115" rx="4" />
          <rect x="470" y="70" width="70" height="150" rx="4" />
          <rect x="660" y="115" width="70" height="105" rx="4" />
          <rect x="850" y="140" width="70" height="80" rx="4" />
        </g>
        <g fill="#64748b" font-size="14">
          <text x="92" y="242">Clinic</text>
          <text x="272" y="242">School</text>
          <text x="465" y="242">Water</text>
          <text x="640" y="242">Community Hub</text>
          <text x="830" y="242">Productive Use</text>
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
        <span>Baseline</span>
        <div class="comparison-track"><div class="comparison-fill gray-fill" style="width:${base}%">${base}%</div></div>
      </div>
      <div class="comparison-row">
        <span>Current</span>
        <div class="comparison-track"><div class="comparison-fill blue-fill" style="width:${current}%">${current}%</div></div>
      </div>
      <div class="comparison-row">
        <span>Phase 1</span>
        <div class="comparison-track"><div class="comparison-fill green-fill" style="width:${future}%">${future}%</div></div>
      </div>
    </div>
  `;
}

init();
