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
    title: "Energy & Reliability",
    subtitle: "Ensuring power is available when communities need it",
    status: "Operational",
    render: renderEnergy
  },
  {
    id: "community",
    icon: "🏥",
    title: "Community Impact",
    subtitle: "Measuring improvements in daily life",
    status: "Impact Tracking",
    render: renderCommunity
  },
  {
    id: "economic",
    icon: "↗",
    title: "Economic Development",
    subtitle: "Turning energy access into opportunity",
    status: "Growth Enabled",
    render: renderEconomic
  },
  {
    id: "finance",
    icon: "$",
    title: "Financial Sustainability",
    subtitle: "Building a system that can last",
    status: "Budget Managed",
    render: renderFinance
  },
  {
    id: "safety",
    icon: "🛡",
    title: "Safety & Security",
    subtitle: "Protecting people, equipment, and data",
    status: "Compliant",
    render: renderSafety
  },
  {
    id: "workforce",
    icon: "👷",
    title: "Workforce Development",
    subtitle: "Creating local capacity for long-term success",
    status: "Capacity Building",
    render: renderWorkforce
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Tamale–Savelugu Opportunity Corridor site clusters",
    status: "Corridor Focus",
    render: renderMap
  },
  {
    id: "dictionary",
    icon: "▣",
    title: "Data Dictionary",
    subtitle: "Definitions, sources, and reporting cadence for KPIs",
    status: "KPI Controlled",
    render: renderDictionary
  },
  {
    id: "scenario",
    icon: "⇄",
    title: "Scenario Comparison",
    subtitle: "Baseline vs current vs Phase 1 target",
    status: "Scenario Model",
    render: renderScenario
  },
  {
    id: "about",
    icon: "ⓘ",
    title: "About the System",
    subtitle: "What the dashboard measures and why it matters",
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
          <div class="comparison-fill gray-fill" style="width:${baseline}%">${baseline}${unit === "%" ? "%" : ""}</div>
        </div>
      </div>
      <div class="comparison-row">
        <span>Current</span>
        <div class="comparison-track">
          <div class="comparison-fill blue-fill" style="width:${current}%">${current}${unit === "%" ? "%" : ""}</div>
        </div>
      </div>
      <div class="comparison-row">
        <span>Phase 1 Target</span>
        <div class="comparison-track">
          <div class="comparison-fill green-fill" style="width:${target}%">${target}${unit === "%" ? "%" : ""}</div>
        </div>
      </div>
    </div>
  `;
}

function renderHome() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("⚡", "yellow", "System Uptime", "99.1%", "Energy & Reliability")}
      ${metricCard("🏥", "green", "Clinic Service Hours Supported", "1,120 hrs/mo", "Community Impact")}
      ${metricCard("↗", "blue", "Businesses Powered", "28", "Economic Development")}
      ${metricCard("$", "purple", "Funding Leveraged", "$6.4M", "Financial Sustainability")}
      ${metricCard("🛡", "cyan", "Inspection Compliance", "100%", "Safety & Security")}
      ${metricCard("👷", "green", "Students Trained", "48", "Workforce Development")}
    </div>

    <div class="alert">
      <div>
        <strong>Phase 1 Corridor Scope</strong>
        <p>This dashboard is intentionally sized to a realistic first-phase deployment in the Tamale–Savelugu Opportunity Corridor: 4 clinic/health sites, 6 schools, 3 water systems, productive-use support, and a measurable local workforce pipeline.</p>
      </div>
      <button class="btn">View Phase 1 Scope</button>
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "KPI Framework Summary",
        "The six dashboard families directly match the project KPI slide",
        `
        <table>
          <thead>
            <tr>
              <th>KPI Family</th>
              <th>Example Dashboard Metrics</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Energy & Reliability</strong></td>
              <td>Solar energy generated, battery state of charge, system uptime, critical load availability, outage hours avoided</td>
            </tr>
            <tr>
              <td><strong>2. Community Impact</strong></td>
              <td>Students served, clinic service hours supported, refrigeration availability, households connected, community satisfaction</td>
            </tr>
            <tr>
              <td><strong>3. Economic Development</strong></td>
              <td>Businesses powered, productive-use equipment hours, cold storage utilization, estimated income impact, jobs created</td>
            </tr>
            <tr>
              <td><strong>4. Financial Sustainability</strong></td>
              <td>Cost per kWh, revenue collection, cost recovery, maintenance cost trend, funding leveraged</td>
            </tr>
            <tr>
              <td><strong>5. Safety & Security</strong></td>
              <td>Electrical safety incidents, battery safety events, cybersecurity alerts, inspection compliance, operator training completion</td>
            </tr>
            <tr>
              <td><strong>6. Workforce Development</strong></td>
              <td>Students trained, women participating, certifications earned, local technicians trained, community workshops delivered</td>
            </tr>
          </tbody>
        </table>
        `
      )}

      ${sectionCard(
        "Phase 1 Budget Snapshot",
        "Realistic corridor-scale deployment budget",
        `
        <table>
          <thead>
            <tr>
              <th>Budget Category</th>
              <th>Allocation</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Solar generation + BOS</td><td><strong>$5.2M</strong></td></tr>
            <tr><td>Battery storage</td><td><strong>$4.1M</strong></td></tr>
            <tr><td>Distribution / interconnection</td><td><strong>$2.3M</strong></td></tr>
            <tr><td>Controls + monitoring + cyber</td><td><strong>$1.2M</strong></td></tr>
            <tr><td>School / clinic / water upgrades</td><td><strong>$2.6M</strong></td></tr>
            <tr><td>Productive-use support</td><td><strong>$1.3M</strong></td></tr>
            <tr><td>Workforce development</td><td><strong>$0.8M</strong></td></tr>
            <tr><td>Permitting / PM / contingency</td><td><strong>$1.0M</strong></td></tr>
          </tbody>
        </table>
        <div style="margin-top:16px;">
          <strong>Total Base Budget: $18.5M</strong><br>
          <span class="subtext">Potential climate finance upside: +$6.0M to +$7.5M for added resilience, additional storage, and longer-term monitoring.</span>
        </div>
        `
      )}
    </div>
  `;
}

function renderEnergy() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Solar Energy Generated", "7,420 kWh/day", "Average daily corridor generation")}
      ${metricCard("🔋", "green", "Battery State of Charge", "61%", "Aggregate battery state of charge")}
      ${metricCard("✓", "blue", "System Uptime", "99.1%", "Phase 1 corridor uptime")}
      ${metricCard("🏥", "purple", "Critical Load Availability", "99.6%", "Priority loads currently supported")}
      ${metricCard("⏱", "cyan", "Outage Hours Avoided", "176 hrs YTD", "Estimated avoided service disruption")}
      ${metricCard("⚡", "yellow", "Current Load Demand", "486 kW", "Combined current corridor load")}
    </div>

    <section class="card">
      <h3 class="panel-title">Energy & Reliability Operations</h3>
      <p class="panel-subtitle">Operational status across corridor nodes</p>
      <table>
        <thead>
          <tr>
            <th>Site</th>
            <th>Cluster</th>
            <th>Battery %</th>
            <th>Current Load</th>
            <th>Critical Loads</th>
            <th>Uptime</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>TS-01</strong></td>
            <td>Tamale Health Hub</td>
            <td style="color:#16a34a;"><strong>78%</strong></td>
            <td>148 kW</td>
            <td>Clinic + refrigeration</td>
            <td>99.8%</td>
            <td>${badge("Stable", "green")}</td>
          </tr>
          <tr>
            <td><strong>TS-02</strong></td>
            <td>Tamale School + Water Cluster</td>
            <td style="color:#16a34a;"><strong>64%</strong></td>
            <td>122 kW</td>
            <td>School lighting + pumping</td>
            <td>99.2%</td>
            <td>${badge("Stable", "green")}</td>
          </tr>
          <tr>
            <td><strong>TS-03</strong></td>
            <td>Savelugu Market + Cold Store</td>
            <td style="color:#f97316;"><strong>49%</strong></td>
            <td>132 kW</td>
            <td>Cold storage + market loads</td>
            <td>98.6%</td>
            <td>${badge("Watch", "yellow")}</td>
          </tr>
          <tr>
            <td><strong>TS-04</strong></td>
            <td>Savelugu CHPS + Water Node</td>
            <td style="color:#f97316;"><strong>36%</strong></td>
            <td>84 kW</td>
            <td>CHPS + water point</td>
            <td>97.9%</td>
            <td>${badge("Watch", "yellow")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderCommunity() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🎓", "green", "Students Served", "3,450", "Students benefiting from improved school power")}
      ${metricCard("🏥", "red", "Clinic Service Hours Supported", "1,120 hrs/mo", "Monthly health service hours supported")}
      ${metricCard("❄", "blue", "Refrigeration Availability", "99.4%", "Medical / cold-chain uptime")}
      ${metricCard("🏠", "purple", "Households Connected / Benefiting", "1,850", "Direct and indirect household benefit")}
      ${metricCard("🙂", "cyan", "Community Satisfaction Score", "4.4 / 5", "Survey-based satisfaction measure")}
      ${metricCard("💧", "green", "Water Systems Supported", "3", "Community water systems supported")}
    </div>

    <div class="alert info">
      <div>
        <strong>Community Impact is the outcome.</strong>
        <p>This page measures what reliable electricity changes in people’s daily lives — especially for schools, clinics, refrigeration, households, and water access.</p>
      </div>
    </div>

    <section class="card">
      <h3 class="panel-title">Community Impact by Service Area</h3>
      <p class="panel-subtitle">Illustrative Phase 1 service benefit profile</p>
      ${barChartCommunity()}
    </section>
  `;
}

function renderEconomic() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🏪", "green", "Businesses Powered", "28", "Businesses supported by reliable electricity")}
      ${metricCard("⚙", "yellow", "Productive-Use Equipment Hours", "186 hrs/week", "Estimated weekly operating hours")}
      ${metricCard("❄", "blue", "Cold Storage Utilization", "74%", "Utilization of cold storage assets")}
      ${metricCard("↗", "purple", "Estimated Income Impact", "+$18,000/mo", "Estimated aggregate monthly income gain")}
      ${metricCard("👥", "cyan", "Jobs Created", "32", "Direct + local jobs associated with deployment")}
      ${metricCard("🌾", "green", "Agro-Processing Sites", "5", "Productive-use agricultural activity sites")}
    </div>

    <section class="card">
      <h3 class="panel-title">Economic Development Monitor</h3>
      <p class="panel-subtitle">Turning electricity access into productive opportunity</p>
      <table>
        <thead>
          <tr>
            <th>Use Case</th>
            <th>Current Scale</th>
            <th>Impact Signal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cold storage</td>
            <td>2 active units</td>
            <td>Reduced spoilage and improved food preservation</td>
            <td>${badge("Strong", "green")}</td>
          </tr>
          <tr>
            <td>Agro-processing</td>
            <td>5 supported sites</td>
            <td>Longer operating windows and more predictable output</td>
            <td>${badge("Growing", "blue")}</td>
          </tr>
          <tr>
            <td>Microenterprise</td>
            <td>28 businesses</td>
            <td>Extended operating hours and improved service delivery</td>
            <td>${badge("Growing", "green")}</td>
          </tr>
          <tr>
            <td>Evening market activity</td>
            <td>Moderate</td>
            <td>Better lighting and greater evening commerce</td>
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
      ${metricCard("✓", "green", "Revenue Collection Rate", "92%", "Share of collectible revenue recovered")}
      ${metricCard("↺", "blue", "Cost Recovery", "88%", "Share of operating cost recovered")}
      ${metricCard("🧰", "purple", "Maintenance Cost Trend", "3% below plan", "Current maintenance cost trend")}
      ${metricCard("🏦", "cyan", "Funding Leveraged", "$6.4M", "Climate / partner financing leveraged")}
      ${metricCard("📦", "green", "O&M Reserve Coverage", "14 months", "Estimated reserve runway")}
    </div>

    <section class="card">
      <h3 class="panel-title">Financial Sustainability Summary</h3>
      <p class="panel-subtitle">Building a system that can last</p>
      <table>
        <thead>
          <tr>
            <th>Metric</th>
            <th>Current Value</th>
            <th>Interpretation</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Cost per kWh Delivered</td><td><strong>$0.23</strong></td><td>Reasonable for resilient distributed energy in a first-phase deployment</td></tr>
          <tr><td>Revenue Collection Rate</td><td><strong>92%</strong></td><td>Strong early collection performance</td></tr>
          <tr><td>Cost Recovery</td><td><strong>88%</strong></td><td>Approaching operational sustainability</td></tr>
          <tr><td>Maintenance Cost Trend</td><td><strong>3% below plan</strong></td><td>Maintenance burden is currently manageable</td></tr>
          <tr><td>Funding Leveraged</td><td><strong>$6.4M</strong></td><td>Demonstrates climate-finance / partner confidence</td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderSafety() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("✓", "green", "Electrical Safety Incidents", "0", "No recordable electrical safety incidents")}
      ${metricCard("🔋", "blue", "Battery Safety Events", "0", "No battery safety events reported")}
      ${metricCard("🔒", "purple", "Cybersecurity Alerts", "2 low", "Low-severity alerts, resolved")}
      ${metricCard("📋", "cyan", "Inspection Compliance", "100%", "All scheduled inspections completed")}
      ${metricCard("👷", "yellow", "Operator Training Completion", "88%", "Required operator training completion")}
      ${metricCard("⏱", "green", "Emergency Response Target", "< 4 hrs", "Target response time for priority issues")}
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Active Safety Monitor",
        "Current system risks and alerts",
        `
        <div class="risk-list">
          <div class="risk-row risk-low"><strong>Battery room temperature trend under watch</strong><span>Low</span></div>
          <div class="risk-row risk-low"><strong>Routine cybersecurity review complete</strong><span>Low</span></div>
          <div class="risk-row risk-medium"><strong>Dry-season dust accumulation risk</strong><span>Medium</span></div>
        </div>
        `
      )}

      ${sectionCard(
        "Priority Protection Order",
        "Loads protected first during disturbances",
        `
        <div class="priority-stack">
          <div class="stack-row"><span>1</span><strong>Clinics and vaccine refrigeration</strong></div>
          <div class="stack-row"><span>2</span><strong>Water systems and community hubs</strong></div>
          <div class="stack-row"><span>3</span><strong>Schools</strong></div>
          <div class="stack-row"><span>4</span><strong>Small businesses and productive-use loads</strong></div>
        </div>
        `
      )}
    </div>
  `;
}

function renderWorkforce() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🎓", "green", "Students Trained", "48", "Students engaged in technical learning")}
      ${metricCard("♀", "purple", "Women Participating", "58%", "Women participants in workforce activities")}
      ${metricCard("📜", "blue", "Technical Certifications Earned", "14", "Formal certifications completed")}
      ${metricCard("🧰", "yellow", "Local Technicians Trained", "12", "Technicians prepared for O&M support")}
      ${metricCard("👥", "cyan", "Community Workshops Delivered", "9", "Workshops held with local participants")}
      ${metricCard("✓", "green", "Training Completion", "91%", "Completion rate for planned activities")}
    </div>

    <section class="card">
      <h3 class="panel-title">Workforce Development Summary</h3>
      <p class="panel-subtitle">Creating local capacity for long-term success</p>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Current Result</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Student training</td><td><strong>48 participants</strong></td><td>Builds future local energy talent</td></tr>
          <tr><td>Women’s participation</td><td><strong>58%</strong></td><td>Improves inclusion and access to opportunity</td></tr>
          <tr><td>Technical certifications</td><td><strong>14 earned</strong></td><td>Shows measurable skill development</td></tr>
          <tr><td>Local technicians</td><td><strong>12 trained</strong></td><td>Supports local operations and maintenance</td></tr>
          <tr><td>Community workshops</td><td><strong>9 delivered</strong></td><td>Builds trust, awareness, and adoption</td></tr>
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
        "Illustrative Phase 1 deployment geography",
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
        "Deployment Notes",
        "Why this corridor is a credible Phase 1 focus",
        `
        <div class="mini-list">
          <div class="mini-item">
            <strong>Tamale anchor hub</strong>
            <p>Provides a realistic primary service node for health, education, operations, and logistics.</p>
          </div>
          <div class="mini-item">
            <strong>Savelugu extension</strong>
            <p>Adds a second corridor node for clinics, schools, water systems, local businesses, and productive-use activity.</p>
          </div>
          <div class="mini-item">
            <strong>Right-sized geography</strong>
            <p>Large enough to show measurable impact, but still financeable, maintainable, and realistic for Phase 1.</p>
          </div>
        </div>
        `
      )}
    </div>
  `;
}

function renderDictionary() {
  const rows = [
    ["Solar Energy Generated", "Average daily energy produced by corridor solar assets.", "Energy & Reliability", "Generation monitoring", "Daily"],
    ["Battery State of Charge", "Current aggregate battery charge level.", "Energy & Reliability", "Battery management system", "Hourly"],
    ["System Uptime", "Percent of time corridor systems are operational.", "Energy & Reliability", "Operations logs", "Daily"],
    ["Critical Load Availability", "Availability of power to priority loads.", "Energy & Reliability", "Facility monitoring", "Daily"],
    ["Outage Hours Avoided", "Estimated service disruption avoided through backup power.", "Energy & Reliability", "Reliability model", "Monthly"],
    ["Students Served", "Students benefiting from improved electricity access.", "Community Impact", "School records / estimates", "Quarterly"],
    ["Clinic Service Hours Supported", "Healthcare service hours enabled by reliable power.", "Community Impact", "Clinic estimates", "Monthly"],
    ["Refrigeration Availability", "Availability of medical or cold-chain refrigeration.", "Community Impact", "Site monitoring", "Monthly"],
    ["Households Connected / Benefiting", "Households directly or indirectly benefiting from improved services.", "Community Impact", "Program estimate", "Quarterly"],
    ["Community Satisfaction Score", "Survey-based community satisfaction rating.", "Community Impact", "Survey data", "Quarterly"],
    ["Businesses Powered", "Businesses supported by reliable electricity.", "Economic Development", "Program records", "Quarterly"],
    ["Productive-Use Equipment Hours", "Hours of operation for productive-use equipment.", "Economic Development", "Site logs", "Monthly"],
    ["Cold Storage Utilization", "Utilization rate of cold storage capacity.", "Economic Development", "Usage logs", "Monthly"],
    ["Estimated Income Impact", "Estimated income uplift from improved electricity access.", "Economic Development", "Economic estimate", "Quarterly"],
    ["Jobs Created", "Direct and indirect jobs created.", "Economic Development", "Program estimate", "Quarterly"],
    ["Cost per kWh Delivered", "Estimated blended delivered electricity cost.", "Financial Sustainability", "Financial model", "Quarterly"],
    ["Revenue Collection Rate", "Percentage of collectible revenue recovered.", "Financial Sustainability", "Finance records", "Monthly"],
    ["Cost Recovery", "Share of operating costs recovered.", "Financial Sustainability", "Finance model", "Quarterly"],
    ["Maintenance Cost Trend", "Current maintenance cost performance versus plan.", "Financial Sustainability", "O&M records", "Quarterly"],
    ["Funding Leveraged", "Additional partner or climate finance secured.", "Financial Sustainability", "Finance records", "Quarterly"],
    ["Electrical Safety Incidents", "Number of reportable electrical safety incidents.", "Safety & Security", "Safety reporting", "Monthly"],
    ["Battery Safety Events", "Number of reportable battery safety events.", "Safety & Security", "Safety reporting", "Monthly"],
    ["Cybersecurity Alerts", "Security alerts requiring review or response.", "Safety & Security", "System logs", "Monthly"],
    ["Inspection Compliance", "Percent of required inspections completed.", "Safety & Security", "Inspection records", "Monthly"],
    ["Operator Training Completion", "Percent of operators completing required training.", "Safety & Security", "Training records", "Quarterly"],
    ["Students Trained", "Students engaged in workforce development activities.", "Workforce Development", "Training records", "Quarterly"],
    ["Women Participating", "Share of women participating in workforce development.", "Workforce Development", "Participation records", "Quarterly"],
    ["Technical Certifications Earned", "Formal technical certifications completed.", "Workforce Development", "Training records", "Quarterly"],
    ["Local Technicians Trained", "Technicians trained to support operations and maintenance.", "Workforce Development", "Training records", "Quarterly"],
    ["Community Workshops Delivered", "Number of workshops delivered to community participants.", "Workforce Development", "Program records", "Quarterly"]
  ];

  return `
    <section class="card">
      <h3 class="panel-title">KPI Data Dictionary</h3>
      <p class="panel-subtitle">Definitions, sources, and reporting cadence</p>
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
        <p>This view compares the corridor before intervention, its current modeled status, and the Phase 1 target state.</p>
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
        <p>Early modeled implementation status</p>
        <strong>Operational</strong>
      </section>
      <section class="card scenario-summary gray">
        <h3>Phase 1 Target</h3>
        <p>Expected outcome after corridor implementation</p>
        <strong>Impact-Proven</strong>
      </section>
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">Selected KPI Shift</h3>
      <p class="panel-subtitle">From baseline conditions to realistic Phase 1 target</p>
      ${comparisonBars("System Uptime", "58", "91", "99", "%")}
      ${comparisonBars("Critical Load Availability", "41", "88", "99", "%")}
      ${comparisonBars("Households Benefiting", "20", "54", "82", "%")}
      ${comparisonBars("Business Energy Reliability", "30", "68", "90", "%")}
      ${comparisonBars("Cold Storage Utilization", "0", "52", "74", "%")}
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
        <p>It directly aligns to the project’s six KPI families from the presentation slide: Energy & Reliability, Community Impact, Economic Development, Financial Sustainability, Safety & Security, and Workforce Development.</p>
        `
      )}

      ${sectionCard(
        "Why realism matters",
        "This is sized to a corridor-scale Phase 1, not a national rollout",
        `
        <p>The metrics reflect a realistic Phase 1 deployment in the Tamale–Savelugu Opportunity Corridor, so the site counts, business counts, household impacts, clinic hours, and budget assumptions remain credible.</p>
        <p><strong>If we cannot measure it, we cannot prove it worked — or improve it.</strong></p>
        `
      )}
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">SDG Alignment</h3>
      <p class="panel-subtitle">The outcomes this dashboard is designed to help demonstrate</p>
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
          <rect x="90" y="85" width="85" height="135" rx="4" />
          <rect x="260" y="70" width="85" height="150" rx="4" />
          <rect x="430" y="78" width="85" height="142" rx="4" />
          <rect x="600" y="92" width="85" height="128" rx="4" />
          <rect x="770" y="108" width="85" height="112" rx="4" />
        </g>
        <g fill="#64748b" font-size="14">
          <text x="82" y="242">Students</text>
          <text x="232" y="242">Clinic Hours</text>
          <text x="390" y="242">Refrigeration</text>
          <text x="588" y="242">Households</text>
          <text x="760" y="242">Water Systems</text>
        </g>
      </svg>
    </div>
  `;
}

init();
