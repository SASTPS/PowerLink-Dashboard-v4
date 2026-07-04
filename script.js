const pages = [
  {
    id: "home",
    icon: "⌂",
    title: "Home Dashboard",
    subtitle: "Phase 1 KPI overview for the Tamale–Savelugu Opportunity Corridor",
    status: "Phase 1 Active",
    render: renderHome
  },
  {
    id: "energy",
    icon: "⚡",
    title: "Live Operations",
    subtitle: "Energy & Reliability — monitoring power generation, storage, uptime, and critical loads",
    status: "Operational",
    render: renderEnergy
  },
  {
    id: "community",
    icon: "☷",
    title: "Community Impact",
    subtitle: "Measuring how reliable electricity improves education, healthcare, access, and quality of life",
    status: "Impact Tracking",
    render: renderCommunity
  },
  {
    id: "economic",
    icon: "↗",
    title: "Economic Development",
    subtitle: "Tracking productive-use energy, business activity, cold storage, and income effects",
    status: "Growth Enabled",
    render: renderEconomic
  },
  {
    id: "finance",
    icon: "$",
    title: "Financial Sustainability",
    subtitle: "Monitoring costs, funding, collections, cost recovery, and long-term viability",
    status: "Budget Managed",
    render: renderFinance
  },
  {
    id: "safety",
    icon: "🛡",
    title: "Safety & Security",
    subtitle: "Protecting people, equipment, systems, and data",
    status: "Compliant",
    render: renderSafety
  },
  {
    id: "workforce",
    icon: "👷",
    title: "Workforce Development",
    subtitle: "Tracking local training, certifications, participation, and technical capacity",
    status: "Capacity Building",
    render: renderWorkforce
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Tamale–Savelugu Opportunity Corridor deployment geography and site clusters",
    status: "Corridor Focus",
    render: renderMap
  },
  {
    id: "dictionary",
    icon: "▣",
    title: "Data Dictionary",
    subtitle: "Definitions, sources, and reporting cadence for all KPIs",
    status: "KPI Controlled",
    render: renderDictionary
  },
  {
    id: "scenario",
    icon: "⇄",
    title: "Scenario Comparison",
    subtitle: "Baseline vs current vs Phase 1 corridor target",
    status: "Scenario Model",
    render: renderScenario
  },
  {
    id: "about",
    icon: "ⓘ",
    title: "About the System",
    subtitle: "What this dashboard measures and why it matters",
    status: "PowerLink Ghana 2050",
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

function sectionCard(title, subtitle, content) {
  return `
    <section class="card">
      <h3 class="panel-title">${title}</h3>
      <p class="panel-subtitle">${subtitle}</p>
      ${content}
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

function comparisonBars(metric, baseline, current, target, unit) {
  return `
    <div class="comparison-block">
      <div class="comparison-header">
        <strong>${metric}</strong>
        <span>${unit}</span>
      </div>
      <div class="comparison-row">
        <span>Baseline</span>
        <div class="comparison-track">
          <div class="comparison-fill gray-fill" style="width:${baseline}%">${baseline}%</div>
        </div>
      </div>
      <div class="comparison-row">
        <span>Current</span>
        <div class="comparison-track">
          <div class="comparison-fill blue-fill" style="width:${current}%">${current}%</div>
        </div>
      </div>
      <div class="comparison-row">
        <span>Phase 1 Target</span>
        <div class="comparison-track">
          <div class="comparison-fill green-fill" style="width:${target}%">${target}%</div>
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("⚡", "yellow", "Energy & Reliability", "99.1%", "System uptime across Phase 1 corridor assets")}
      ${metricCard("🏥", "green", "Community Impact", "13 sites", "4 clinics/CHPS + 6 schools + 3 water systems")}
      ${metricCard("↗", "blue", "Economic Development", "28 businesses", "Businesses supported with reliable electricity")}
      ${metricCard("$", "purple", "Financial Sustainability", "$18.5M", "Base Phase 1 corridor budget")}
      ${metricCard("🛡", "cyan", "Safety & Security", "0 incidents", "No major safety incidents reported")}
      ${metricCard("👷", "green", "Workforce Development", "48 trainees", "Students and local participants trained")}
    </div>

    <div class="alert">
      <div>
        <strong>Phase 1 Scope: Tamale–Savelugu Opportunity Corridor</strong>
        <p>This dashboard reflects a realistic first-phase corridor deployment focused on critical services, productive-use energy, and measurable community outcomes — not a national rollout.</p>
      </div>
      <button class="btn">View Corridor Plan</button>
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Phase 1 Budget Snapshot",
        "Realistic base budget for a corridor-scale deployment",
        `
        <table>
          <thead>
            <tr>
              <th>Budget Category</th>
              <th>Allocation</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Solar generation + BOS</td><td><strong>$5.2M</strong></td><td>PV arrays, mounting, inverter systems, electrical BOS</td></tr>
            <tr><td>Battery storage</td><td><strong>$4.1M</strong></td><td>Battery systems, controls, and resilience reserve</td></tr>
            <tr><td>Distribution / interconnection</td><td><strong>$2.3M</strong></td><td>Distribution upgrades, wiring, and corridor connections</td></tr>
            <tr><td>Controls + monitoring + cyber</td><td><strong>$1.2M</strong></td><td>Smart monitoring, dashboard integration, cybersecurity</td></tr>
            <tr><td>School / clinic / water upgrades</td><td><strong>$2.6M</strong></td><td>Priority-load infrastructure at corridor facilities</td></tr>
            <tr><td>Productive-use support</td><td><strong>$1.3M</strong></td><td>Cold storage, agro-processing, microenterprise support</td></tr>
            <tr><td>Workforce development</td><td><strong>$0.8M</strong></td><td>Training, certifications, and community capacity</td></tr>
            <tr><td>Permitting / PM / contingency</td><td><strong>$1.0M</strong></td><td>Approvals, project management, reserve contingency</td></tr>
          </tbody>
        </table>
        <div style="margin-top:16px;">
          <strong>Total Base Budget: $18.5M</strong><br>
          <span class="subtext">Potential climate-finance upside: +$6.0M to +$7.5M for resilience expansion, emissions tracking, and additional storage.</span>
        </div>
        `
      )}

      ${sectionCard(
        "KPI Readiness",
        "How prepared the corridor is for measured deployment",
        progressList([
          ["Site & Load Assessment", "82"],
          ["Stakeholder / VoC Alignment", "78"],
          ["Technical Design", "74"],
          ["Funding Readiness", "69"],
          ["Permitting Pathway", "58"],
          ["O&M / Training Plan", "71"]
        ])
      )}
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">Why this dashboard matters</h3>
      <p class="panel-subtitle">Power generation is the output. Community impact is the outcome.</p>
      <div class="mini-list">
        <div class="mini-item">
          <strong>We measure both technical performance and human outcomes.</strong>
          <p>The dashboard is built to prove not just that the system produces electricity, but that it improves clinics, schools, water access, and economic opportunity.</p>
        </div>
        <div class="mini-item">
          <strong>Every KPI ties to a realistic Phase 1 use case.</strong>
          <p>Metrics reflect a corridor-scale implementation centered on Tamale–Savelugu, with realistic counts of facilities, businesses, and trainees.</p>
        </div>
      </div>
    </section>
  `;
}

function renderEnergy() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Solar Energy Generated", "7.4 MWh/day", "Average modeled daily production across corridor assets")}
      ${metricCard("▭", "green", "Battery State of Charge", "61%", "Aggregate state of charge across Phase 1 storage assets")}
      ${metricCard("✓", "blue", "System Uptime", "99.1%", "Measured operating uptime across corridor sites")}
      ${metricCard("🏥", "purple", "Critical Load Availability", "100%", "Critical clinic and water loads currently supported")}
      ${metricCard("⏱", "cyan", "Outage Hours Avoided", "176 hrs YTD", "Estimated outage hours avoided through backup power")}
      ${metricCard("⚡", "yellow", "Current Load Demand", "486 kW", "Combined corridor load at current snapshot")}
    </div>

    <section class="card">
      <h3 class="panel-title">Corridor Energy Operations</h3>
      <p class="panel-subtitle">Live operational status for Phase 1 corridor nodes</p>
      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Cluster</th>
            <th>Battery %</th>
            <th>Critical Loads</th>
            <th>System Uptime</th>
            <th>Status</th>
            <th>Recommended Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>TS-01</strong></td>
            <td>Tamale Health Hub</td>
            <td style="color:#16a34a;">78%</td>
            <td>Hospital support + refrigeration</td>
            <td>99.8%</td>
            <td>${badge("Stable", "green")}</td>
            <td>Continue standard monitoring</td>
          </tr>
          <tr>
            <td><strong>TS-02</strong></td>
            <td>Tamale School + Water Cluster</td>
            <td style="color:#16a34a;">64%</td>
            <td>School lighting + pump support</td>
            <td>99.2%</td>
            <td>${badge("Stable", "green")}</td>
            <td>Monitor evening school demand</td>
          </tr>
          <tr>
            <td><strong>TS-03</strong></td>
            <td>Savelugu Market + Cold Store</td>
            <td style="color:#f97316;">49%</td>
            <td>Cold storage + productive-use loads</td>
            <td>98.6%</td>
            <td>${badge("Watch", "yellow")}</td>
            <td>Shift noncritical loads to daylight window</td>
          </tr>
          <tr>
            <td><strong>TS-04</strong></td>
            <td>Savelugu CHPS + Water Point</td>
            <td style="color:#f97316;">36%</td>
            <td>CHPS + community water load</td>
            <td>97.9%</td>
            <td>${badge("Watch", "yellow")}</td>
            <td>Protect reserve for health service continuity</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderCommunity() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🎓", "green", "Students Served", "3,450", "Students benefiting from improved school power reliability")}
      ${metricCard("🏥", "red", "Clinic Service Hours Supported", "1,120 hrs/mo", "Monthly healthcare service hours supported")}
      ${metricCard("❄", "blue", "Refrigeration Availability", "99.4%", "Cold-chain / vaccine refrigeration uptime")}
      ${metricCard("🏠", "purple", "Households Benefiting", "1,850", "Households receiving indirect benefit from improved service access")}
      ${metricCard("🙂", "cyan", "Community Satisfaction", "4.4 / 5", "Survey-based satisfaction rating")}
      ${metricCard("💧", "green", "Water Systems Supported", "3", "Community water systems with improved reliability")}
    </div>

    <div class="alert info">
      <div>
        <strong>Community impact is the outcome.</strong>
        <p>This dashboard ties electricity access to concrete improvements in healthcare, education, water reliability, and everyday life.</p>
      </div>
    </div>

    <section class="card">
      <h3 class="panel-title">Community Impact by Service Type</h3>
      <p class="panel-subtitle">Measured impact categories within the corridor</p>
      ${barChartCommunity()}
    </section>
  `;
}

function renderEconomic() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🏪", "green", "Businesses Powered", "28", "Market vendors, microenterprises, and local businesses supported")}
      ${metricCard("⚙", "yellow", "Productive-Use Equipment Hours", "186 hrs/week", "Estimated weekly operating hours of productive-use equipment")}
      ${metricCard("❄", "blue", "Cold Storage Utilization", "74%", "Utilization of cold storage supported by reliable power")}
      ${metricCard("↗", "purple", "Estimated Income Impact", "+$18,000/mo", "Estimated aggregate monthly income increase")}
      ${metricCard("👥", "cyan", "Jobs Created", "32", "Direct and local jobs associated with Phase 1 deployment")}
      ${metricCard("🌾", "green", "Agro-processing Sites", "5", "Sites using energy for productive economic activity")}
    </div>

    <section class="card">
      <h3 class="panel-title">Economic Opportunity Monitor</h3>
      <p class="panel-subtitle">How reliable energy is translating into productive use and local opportunity</p>
      <table>
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Current Activity</th>
            <th>Impact Signal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cold storage</td>
            <td>2 active units</td>
            <td>Reduced spoilage and longer marketable shelf life</td>
            <td>${badge("Strong", "green")}</td>
          </tr>
          <tr>
            <td>Agro-processing</td>
            <td>5 supported sites</td>
            <td>More operating hours and more predictable throughput</td>
            <td>${badge("Growing", "blue")}</td>
          </tr>
          <tr>
            <td>Microenterprise</td>
            <td>28 businesses</td>
            <td>Extended business hours and improved service delivery</td>
            <td>${badge("Growing", "green")}</td>
          </tr>
          <tr>
            <td>Evening commerce</td>
            <td>Moderate</td>
            <td>Improved lighting and market visibility</td>
            <td>${badge("Emerging", "yellow")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderFinance() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("$", "yellow", "Cost per kWh Delivered", "$0.23", "Estimated blended delivered cost")}
      ${metricCard("✓", "green", "Revenue Collection Rate", "92%", "Percentage of collectible revenue recovered")}
      ${metricCard("↺", "blue", "Cost Recovery", "88%", "Share of operating costs recovered")}
      ${metricCard("🧰", "purple", "Maintenance Cost Trend", "On Budget", "Maintenance expenditure relative to plan")}
      ${metricCard("🏦", "cyan", "Funding Leveraged", "$6.4M", "Climate / partner financing leveraged beyond base budget")}
      ${metricCard("📦", "green", "O&M Reserve Coverage", "14 months", "Estimated operations reserve coverage")}
    </div>

    <section class="card">
      <h3 class="panel-title">Financial Sustainability Summary</h3>
      <p class="panel-subtitle">Can the system last, and can we prove it?</p>
      <table>
        <thead>
          <tr>
            <th>Financial KPI</th>
            <th>Current Value</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cost per kWh Delivered</td><td><strong>$0.23</strong></td><td>Reasonable early-phase delivery cost for distributed resilient infrastructure</td></tr>
          <tr><td>Revenue Collection Rate</td><td><strong>92%</strong></td><td>Strong early collection performance</td></tr>
          <tr><td>Cost Recovery</td><td><strong>88%</strong></td><td>Approaching sustainable operations; remaining gap can be supported by grant / climate finance</td></tr>
          <tr><td>Funding Leveraged</td><td><strong>$6.4M</strong></td><td>Shows credibility with external funders</td></tr>
          <tr><td>Maintenance Cost Trend</td><td><strong>On Budget</strong></td><td>Indicates manageable operating burden</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderSafety() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("✓", "green", "Electrical Safety Incidents", "0", "No recordable incidents reported")}
      ${metricCard("🔋", "blue", "Battery Safety Events", "0", "No safety events across corridor battery systems")}
      ${metricCard("🔒", "purple", "Cybersecurity Alerts", "2 low", "Low-severity alerts, resolved without escalation")}
      ${metricCard("📋", "cyan", "Inspection Compliance", "100%", "Scheduled inspections completed")}
      ${metricCard("👷", "yellow", "Operator Training Completion", "88%", "Percent of operators completing required training")}
      ${metricCard("⏱", "green", "Emergency Response Target", "< 4 hrs", "Target response time for site-level issues")}
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Active Safety Monitor",
        "Current alerts and risks",
        `
        <div class="risk-list">
          <div class="risk-row risk-low"><strong>Battery room temperature monitoring</strong><span>Low</span></div>
          <div class="risk-row risk-low"><strong>Routine cybersecurity review</strong><span>Low</span></div>
          <div class="risk-row risk-medium"><strong>Dust accumulation risk during dry season</strong><span>Medium</span></div>
        </div>
        `
      )}

      ${sectionCard(
        "Priority Protection Order",
        "What gets protected first during disturbances",
        `
        <div class="priority-stack">
          <div class="stack-row"><span>1</span><strong>Clinics / CHPS + refrigeration</strong></div>
          <div class="stack-row"><span>2</span><strong>Water systems</strong></div>
          <div class="stack-row"><span>3</span><strong>Schools and learning loads</strong></div>
          <div class="stack-row"><span>4</span><strong>Productive-use and business loads</strong></div>
        </div>
        `
      )}
    </div>
  `;
}

function renderWorkforce() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🎓", "green", "Students Trained", "48", "Students participating in technical learning experiences")}
      ${metricCard("♀", "purple", "Women Participating", "58%", "Share of women participants in workforce activities")}
      ${metricCard("📜", "blue", "Technical Certifications", "14", "Formal certifications earned")}
      ${metricCard("🧰", "yellow", "Local Technicians Trained", "12", "Local technicians trained for operations / maintenance")}
      ${metricCard("👥", "cyan", "Community Workshops", "9", "Workshops delivered to community members")}
      ${metricCard("✓", "green", "Training Completion", "91%", "Completion rate for planned workforce activities")}
    </div>

    <section class="card">
      <h3 class="panel-title">Workforce Pipeline</h3>
      <p class="panel-subtitle">Building local capacity for long-term system success</p>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Current Result</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Student engagement</td><td><strong>48 participants</strong></td><td>Builds future local energy talent</td></tr>
          <tr><td>Technician training</td><td><strong>12 trained</strong></td><td>Supports local operations and maintenance</td></tr>
          <tr><td>Women’s participation</td><td><strong>58%</strong></td><td>Improves inclusion and local opportunity</td></tr>
          <tr><td>Certifications earned</td><td><strong>14</strong></td><td>Shows measurable skill attainment</td></tr>
          <tr><td>Community workshops</td><td><strong>9</strong></td><td>Builds local understanding and buy-in</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderMap() {
  return `
    <div class="grid two-col">
      ${sectionCard(
        "Tamale–Savelugu Opportunity Corridor",
        "Illustrative corridor deployment geography",
        `
        <div class="map-visual">
          <div class="ghana-shape"></div>
          <div class="map-marker marker-north"><span></span><strong>Tamale Hub</strong></div>
          <div class="map-marker marker-school"><span></span><strong>School + Water Cluster</strong></div>
          <div class="map-marker marker-enterprise"><span></span><strong>Market / Cold Store Cluster</strong></div>
          <div class="map-marker marker-clinic"><span></span><strong>Savelugu CHPS / Water Node</strong></div>
        </div>
        `
      )}

      ${sectionCard(
        "Corridor Deployment Notes",
        "Why this geography makes sense for Phase 1",
        `
        <div class="mini-list">
          <div class="mini-item">
            <strong>Tamale anchor</strong>
            <p>Acts as the main service and logistics node for health, education, and technical operations.</p>
          </div>
          <div class="mini-item">
            <strong>Savelugu opportunity node</strong>
            <p>Provides a realistic corridor extension for education, health, market activity, and productive-use energy.</p>
          </div>
          <div class="mini-item">
            <strong>Why corridor scale?</strong>
            <p>It is large enough to demonstrate meaningful impact, but still realistic for a first phase that can be financed, operated, and monitored.</p>
          </div>
        </div>
        `
      )}
    </div>
  `;
}

function renderDictionary() {
  const rows = [
    ["Solar Energy Generated", "Average daily energy produced by Phase 1 corridor solar assets.", "Energy & Reliability", "Generation monitoring", "Daily"],
    ["Battery State of Charge", "Current charge level across energy storage assets.", "Energy & Reliability", "Battery monitoring system", "Hourly"],
    ["System Uptime", "Percent of time the corridor systems are operational.", "Energy & Reliability", "Operations logs", "Daily"],
    ["Critical Load Availability", "Availability of priority power to clinics, water, and other critical loads.", "Energy & Reliability", "Facility monitoring", "Daily"],
    ["Outage Hours Avoided", "Estimated number of outage hours mitigated by the corridor system.", "Energy & Reliability", "Reliability model", "Monthly"],
    ["Students Served", "Students directly benefiting from improved electricity access.", "Community Impact", "School records / estimates", "Quarterly"],
    ["Clinic Service Hours Supported", "Healthcare service hours enabled or protected by reliable power.", "Community Impact", "Clinic records / estimates", "Monthly"],
    ["Refrigeration Availability", "Availability of powered cold storage or medical refrigeration.", "Community Impact", "Site monitoring", "Monthly"],
    ["Businesses Powered", "Businesses or market operators supported by improved energy access.", "Economic Development", "Program records", "Quarterly"],
    ["Productive-Use Equipment Hours", "Operating hours of equipment using electricity for income generation.", "Economic Development", "Site logs", "Monthly"],
    ["Estimated Income Impact", "Estimated economic uplift associated with supported business activity.", "Economic Development", "Economic model / survey", "Quarterly"],
    ["Cost per kWh Delivered", "Estimated delivered cost of electricity through the corridor system.", "Financial Sustainability", "Financial model", "Quarterly"],
    ["Revenue Collection Rate", "Share of collectible revenue successfully collected.", "Financial Sustainability", "Finance records", "Monthly"],
    ["Electrical Safety Incidents", "Number of reportable electrical safety incidents.", "Safety & Security", "Safety reporting", "Monthly"],
    ["Cybersecurity Alerts", "Count of cybersecurity alerts requiring review.", "Safety & Security", "Security system logs", "Monthly"],
    ["Students Trained", "Number of students participating in technical and workforce training.", "Workforce Development", "Training records", "Quarterly"],
    ["Local Technicians Trained", "Local technicians trained to operate or maintain the system.", "Workforce Development", "Training records", "Quarterly"]
  ];

  return `
    <section class="card">
      <h3 class="panel-title">KPI Data Dictionary</h3>
      <p class="panel-subtitle">Definitions, sources, and update frequency</p>
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
        <p>This view compares the corridor before intervention, its current status, and the Phase 1 target state.</p>
      </div>
    </div>

    <div class="grid three-col">
      <section class="card scenario-summary blue">
        <h3>Baseline</h3>
        <p>Conditions before meaningful corridor-scale intervention</p>
        <strong>Low reliability</strong>
      </section>
      <section class="card scenario-summary green">
        <h3>Current</h3>
        <p>Modeled early implementation status</p>
        <strong>Operational</strong>
      </section>
      <section class="card scenario-summary gray">
        <h3>Phase 1 Target</h3>
        <p>Expected outcome after corridor implementation</p>
        <strong>Impact-Proven</strong>
      </section>
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">Phase 1 Performance Shift</h3>
      <p class="panel-subtitle">Selected KPIs from baseline to target</p>
      ${comparisonBars("System Uptime", "58", "91", "99", "%")}
      ${comparisonBars("Critical Load Availability", "41", "88", "99", "%")}
      ${comparisonBars("Community Benefit Coverage", "22", "61", "90", "%")}
      ${comparisonBars("Business Energy Reliability", "30", "68", "92", "%")}
      ${comparisonBars("Workforce Capacity Readiness", "15", "54", "85", "%")}
    </section>
  `;
}

function renderAbout() {
  return `
    <div class="grid two-col">
      ${sectionCard(
        "What this dashboard is",
        "A KPI-driven command center for the PowerLink Ghana Phase 1 proposal",
        `
        <p>This dashboard is designed to show whether the proposed energy system is actually working — and whether it is improving life in measurable ways.</p>
        <p>It is intentionally aligned to the project’s six KPI families: Energy & Reliability, Community Impact, Economic Development, Financial Sustainability, Safety & Security, and Workforce Development.</p>
        `
      )}

      ${sectionCard(
        "Why realism matters",
        "This is built for a corridor-scale Phase 1, not a national rollout",
        `
        <p>The dashboard is sized to the Tamale–Savelugu Opportunity Corridor so that the facility counts, business counts, workforce numbers, and budget assumptions remain credible.</p>
        <p><strong>If we cannot measure it, we cannot prove it worked — or improve it.</strong></p>
        `
      )}
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">SDG Alignment</h3>
      <p class="panel-subtitle">The outcomes this dashboard helps demonstrate</p>
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

function barChartCommunity() {
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
          <rect x="90" y="95" width="80" height="125" rx="4" />
          <rect x="280" y="60" width="80" height="160" rx="4" />
          <rect x="470" y="80" width="80" height="140" rx="4" />
          <rect x="660" y="110" width="80" height="110" rx="4" />
          <rect x="850" y="100" width="80" height="120" rx="4" />
        </g>
        <g fill="#64748b" font-size="14">
          <text x="85" y="242">Schools</text>
          <text x="260" y="242">Clinics</text>
          <text x="463" y="242">Refrigeration</text>
          <text x="655" y="242">Households</text>
          <text x="830" y="242">Water Systems</text>
        </g>
      </svg>
    </div>
  `;
}

init();
