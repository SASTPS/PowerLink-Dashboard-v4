const pages = [
  {
    id: "home",
    icon: "⌂",
    title: "Home Dashboard",
    subtitle: "KPI command center for the Phase 1 Tamale–Savelugu Opportunity Corridor",
    status: "KPI Framework Active",
    render: renderHome
  },
  {
    id: "energy",
    icon: "⚡",
    title: "Energy & Reliability",
    subtitle: "Ensuring power is available when communities need it",
    status: "Target: >99% critical-load availability",
    render: renderEnergy
  },
  {
    id: "community",
    icon: "🏥",
    title: "Community Impact",
    subtitle: "Measuring improvements in daily life",
    status: "Education, health, water, households",
    render: renderCommunity
  },
  {
    id: "economic",
    icon: "↗",
    title: "Economic Development",
    subtitle: "Turning energy access into opportunity",
    status: "Business and productive-use tracking",
    render: renderEconomic
  },
  {
    id: "finance",
    icon: "$",
    title: "Financial Sustainability",
    subtitle: "Building a system that can last",
    status: "Transparent financial performance",
    render: renderFinance
  },
  {
    id: "safety",
    icon: "🛡",
    title: "Safety & Security",
    subtitle: "Protecting people, equipment, and data",
    status: "Zero major incidents",
    render: renderSafety
  },
  {
    id: "workforce",
    icon: "👷",
    title: "Workforce Development",
    subtitle: "Creating local capacity for long-term success",
    status: "Local training pipeline",
    render: renderWorkforce
  },
  {
    id: "map",
    icon: "◇",
    title: "Map View",
    subtitle: "Tamale–Savelugu Opportunity Corridor deployment geography",
    status: "Corridor Focus",
    render: renderMap
  },
  {
    id: "dictionary",
    icon: "▣",
    title: "Data Dictionary",
    subtitle: "Definitions, data sources, and reporting cadence for every dashboard KPI",
    status: "KPI Controlled",
    render: renderDictionary
  },
  {
    id: "scenario",
    icon: "⇄",
    title: "Scenario Comparison",
    subtitle: "Baseline, current modeled status, and Phase 1 target comparison",
    status: "Scenario Model",
    render: renderScenario
  },
  {
    id: "about",
    icon: "ⓘ",
    title: "About the System",
    subtitle: "What PowerLink Ghana 2050 measures and why it matters",
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

function renderHome() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("⚡", "yellow", "Energy & Reliability", "99.1%", "System uptime across corridor energy assets")}
      ${metricCard("🏥", "green", "Community Impact", "1,120 hrs/mo", "Clinic service hours supported")}
      ${metricCard("↗", "blue", "Economic Development", "28 businesses", "Local businesses powered")}
      ${metricCard("$", "purple", "Financial Sustainability", "$18.5M", "Realistic Phase 1 base budget")}
      ${metricCard("🛡", "cyan", "Safety & Security", "0 incidents", "No major safety incidents")}
      ${metricCard("👷", "green", "Workforce Development", "48 trainees", "Students and local participants trained")}
    </div>

    <div class="alert">
      <div>
        <strong>Phase 1 Corridor Performance Snapshot</strong>
        <p>PowerLink Ghana tracks whether reliable electricity is improving health services, education, local business activity, cold storage, safety, financial sustainability, and workforce capacity across the Tamale–Savelugu Opportunity Corridor.</p>
      </div>
      <button class="btn">View KPI Summary</button>
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Six KPI Families",
        "Each dashboard section matches one category from the presentation slide",
        `
        <table>
          <thead>
            <tr>
              <th>KPI Family</th>
              <th>Metrics Included in Dashboard</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1. Energy & Reliability</strong></td>
              <td>Solar energy generated, battery state of charge, system uptime, critical load availability, outage hours avoided</td>
            </tr>
            <tr>
              <td><strong>2. Community Impact</strong></td>
              <td>Students served, clinic service hours supported, refrigeration availability, households connected, community satisfaction score</td>
            </tr>
            <tr>
              <td><strong>3. Economic Development</strong></td>
              <td>Businesses powered, productive-use equipment hours, cold storage utilization, estimated income impact, jobs created</td>
            </tr>
            <tr>
              <td><strong>4. Financial Sustainability</strong></td>
              <td>Cost per kWh delivered, revenue collection rate, cost recovery, maintenance cost trend, funding leveraged</td>
            </tr>
            <tr>
              <td><strong>5. Safety & Security</strong></td>
              <td>Electrical safety incidents, battery safety events, cybersecurity alerts, inspection compliance, operator training completion</td>
            </tr>
            <tr>
              <td><strong>6. Workforce Development</strong></td>
              <td>Students trained, women participating, technical certifications earned, local technicians trained, community workshops delivered</td>
            </tr>
          </tbody>
        </table>
        `
      )}

      ${sectionCard(
        "Phase 1 Corridor Scope",
        "Realistic Tamale–Savelugu Opportunity Corridor sizing",
        `
        <div class="mini-list">
          <div class="mini-item">
            <strong>Critical community sites</strong>
            <p>4 clinic / CHPS-related health sites, 6 schools, and 3 water systems supported by reliable power.</p>
          </div>
          <div class="mini-item">
            <strong>Economic activity</strong>
            <p>28 local businesses, 5 agro-processing sites, and 2 cold-storage assets supported through productive-use energy.</p>
          </div>
          <div class="mini-item">
            <strong>Workforce pipeline</strong>
            <p>48 students trained, 12 local technicians trained, and 9 community workshops delivered.</p>
          </div>
          <div class="mini-item">
            <strong>Budget realism</strong>
            <p>Base Phase 1 budget is $18.5M, with a climate-finance upside of $6.0M to $7.5M.</p>
          </div>
        </div>
        `
      )}
    </div>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">Power generation is the output. Community impact is the outcome.</h3>
      <p class="panel-subtitle">The dashboard measures both technical performance and measurable benefits to people.</p>
      <div class="grid three-col">
        <div class="mini-item">
          <strong>Technical proof</strong>
          <p>Uptime, battery reserve, generation, outage reduction, and critical-load performance.</p>
        </div>
        <div class="mini-item">
          <strong>Human proof</strong>
          <p>Clinic hours, students served, households benefiting, refrigeration availability, and satisfaction.</p>
        </div>
        <div class="mini-item">
          <strong>Long-term proof</strong>
          <p>Cost recovery, safety compliance, local training, and climate-finance readiness.</p>
        </div>
      </div>
    </section>
  `;
}

function renderEnergy() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("☀", "yellow", "Solar Energy Generated", "7,420 kWh/day", "Average daily Phase 1 corridor generation")}
      ${metricCard("🔋", "green", "Battery State of Charge", "61%", "Aggregate battery state of charge")}
      ${metricCard("✓", "blue", "System Uptime", "99.1%", "Measured operating uptime across corridor sites")}
      ${metricCard("🏥", "purple", "Critical Load Availability", "99.6%", "Clinic, school, water, and hub loads")}
      ${metricCard("⏱", "cyan", "Outage Hours Avoided", "176 hrs YTD", "Estimated avoided service interruption")}
      ${metricCard("⚡", "yellow", "Current Load Demand", "486 kW", "Current combined corridor demand")}
    </div>

    <div class="alert">
      <div>
        <strong>Smart Target</strong>
        <p>Deliver greater than 99% critical-load availability with real-time monitoring.</p>
      </div>
      <button class="btn">Energy Target</button>
    </div>

    <section class="card">
      <h3 class="panel-title">Energy & Reliability Monitoring Table</h3>
      <p class="panel-subtitle">Ensuring power is available when communities need it</p>
      <table>
        <thead>
          <tr>
            <th>Load Type</th>
            <th>Reliability Target</th>
            <th>Monitoring Method</th>
            <th>Current Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Clinic cold storage and lighting</td>
            <td>≥99% critical-load availability</td>
            <td>Voltage, battery reserve, outage logs</td>
            <td>${badge("Priority", "green")}</td>
          </tr>
          <tr>
            <td>School lighting and devices</td>
            <td>Evening study continuity</td>
            <td>Energy served after sunset</td>
            <td>${badge("Tracked", "blue")}</td>
          </tr>
          <tr>
            <td>Water pumping</td>
            <td>Daily operating window</td>
            <td>Pump runtime and battery reserve</td>
            <td>${badge("Watch", "yellow")}</td>
          </tr>
          <tr>
            <td>Community enterprise loads</td>
            <td>Productive-use availability</td>
            <td>kWh delivered and user demand</td>
            <td>${badge("Tracked", "blue")}</td>
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
      ${metricCard("🏥", "red", "Clinic Service Hours Supported", "1,120 hrs/mo", "Monthly healthcare service hours supported")}
      ${metricCard("❄", "blue", "Refrigeration Availability", "99.4%", "Medical and cold-chain refrigeration uptime")}
      ${metricCard("🏠", "purple", "Households Connected", "1,850", "Households directly or indirectly benefiting")}
      ${metricCard("🙂", "cyan", "Community Satisfaction Score", "4.4 / 5", "Survey-based community satisfaction")}
      ${metricCard("💧", "green", "Water Systems Supported", "3", "Community water systems supported")}
    </div>

    <div class="alert info">
      <div>
        <strong>Smart Target</strong>
        <p>Demonstrate measurable improvements in education, healthcare, refrigeration, household access, and community satisfaction.</p>
      </div>
    </div>

    <section class="card">
      <h3 class="panel-title">Community Impact Dashboard</h3>
      <p class="panel-subtitle">Measuring improvements in daily life</p>
      ${barChartCommunity()}
    </section>

    <section class="card" style="margin-top:24px;">
      <h3 class="panel-title">Community Impact Monitoring Table</h3>
      <table>
        <thead>
          <tr>
            <th>Community Metric</th>
            <th>Phase 1 Value</th>
            <th>Why It Matters</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Students Served</td>
            <td><strong>3,450</strong></td>
            <td>Improved school power supports lighting, devices, and evening learning.</td>
            <td>${badge("Tracked", "green")}</td>
          </tr>
          <tr>
            <td>Clinic Service Hours Supported</td>
            <td><strong>1,120 hrs/mo</strong></td>
            <td>Reliable power helps clinics maintain service hours and essential operations.</td>
            <td>${badge("Priority", "red")}</td>
          </tr>
          <tr>
            <td>Refrigeration Availability</td>
            <td><strong>99.4%</strong></td>
            <td>Cold-chain reliability protects vaccines, medicines, and perishable goods.</td>
            <td>${badge("Strong", "green")}</td>
          </tr>
          <tr>
            <td>Households Connected / Benefiting</td>
            <td><strong>1,850</strong></td>
            <td>Households benefit through improved nearby health, education, water, and enterprise services.</td>
            <td>${badge("Tracked", "blue")}</td>
          </tr>
          <tr>
            <td>Community Satisfaction Score</td>
            <td><strong>4.4 / 5</strong></td>
            <td>Community feedback shows whether the system is useful and trusted.</td>
            <td>${badge("Measured", "green")}</td>
          </tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderEconomic() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("🏪", "green", "Businesses Powered", "28", "Local businesses supported by reliable electricity")}
      ${metricCard("⚙", "yellow", "Productive-Use Equipment Hours", "186 hrs/week", "Weekly operating hours of income-generating equipment")}
      ${metricCard("❄", "blue", "Cold Storage Utilization", "74%", "Use rate of cold-storage capacity")}
      ${metricCard("↗", "purple", "Estimated Income Impact", "+$18,000/mo", "Estimated aggregate monthly income gain")}
      ${metricCard("👥", "cyan", "Jobs Created", "32", "Direct and local jobs associated with Phase 1")}
      ${metricCard("🌾", "green", "Agro-Processing Sites", "5", "Sites using energy for productive agricultural activity")}
    </div>

    <div class="alert">
      <div>
        <strong>Smart Target</strong>
        <p>Track economic activity enabled by reliable electricity.</p>
      </div>
      <button class="btn">Economic Target</button>
    </div>

    <section class="card">
      <h3 class="panel-title">Economic Development Monitor</h3>
      <p class="panel-subtitle">Turning energy access into opportunity</p>
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
            <td>Businesses Powered</td>
            <td><strong>28 businesses</strong></td>
            <td>Supports shops, services, market activity, and local income generation.</td>
            <td>${badge("Growing", "green")}</td>
          </tr>
          <tr>
            <td>Productive-Use Equipment Hours</td>
            <td><strong>186 hrs/week</strong></td>
            <td>Measures whether equipment is actually being used for productive activity.</td>
            <td>${badge("Tracked", "blue")}</td>
          </tr>
          <tr>
            <td>Cold Storage Utilization</td>
            <td><strong>74%</strong></td>
            <td>Reduces spoilage and supports food, medicine, and market resilience.</td>
            <td>${badge("Strong", "green")}</td>
          </tr>
          <tr>
            <td>Estimated Income Impact</td>
            <td><strong>+$18,000/mo</strong></td>
            <td>Estimates income uplift from longer operating hours and lower losses.</td>
            <td>${badge("Modeled", "yellow")}</td>
          </tr>
          <tr>
            <td>Jobs Created</td>
            <td><strong>32</strong></td>
            <td>Tracks direct and indirect employment from installation, operations, and enterprise growth.</td>
            <td>${badge("Tracked", "blue")}</td>
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
      ${metricCard("↺", "blue", "Cost Recovery", "88%", "Share of operating costs recovered")}
      ${metricCard("🧰", "purple", "Maintenance Cost Trend", "3% below plan", "Current maintenance cost performance")}
      ${metricCard("🏦", "cyan", "Funding Leveraged", "$6.4M", "Climate and partner financing leveraged")}
      ${metricCard("📦", "green", "O&M Reserve Coverage", "14 months", "Estimated operations reserve coverage")}
    </div>

    <div class="alert">
      <div>
        <strong>Smart Target</strong>
        <p>Achieve sustainable operations with transparent financial performance.</p>
      </div>
      <button class="btn">Finance Target</button>
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Phase 1 Budget Snapshot",
        "Realistic corridor-scale base budget",
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
            <tr><td>Controls + monitoring + cybersecurity</td><td><strong>$1.2M</strong></td></tr>
            <tr><td>School / clinic / water upgrades</td><td><strong>$2.6M</strong></td></tr>
            <tr><td>Productive-use support</td><td><strong>$1.3M</strong></td></tr>
            <tr><td>Workforce development</td><td><strong>$0.8M</strong></td></tr>
            <tr><td>Permitting / project management / contingency</td><td><strong>$1.0M</strong></td></tr>
          </tbody>
        </table>
        <div style="margin-top:16px;">
          <strong>Total Base Budget: $18.5M</strong><br>
          <span class="subtext">Climate-finance upside: +$6.0M to +$7.5M for added storage, resilience, emissions tracking, and expanded monitoring.</span>
        </div>
        `
      )}

      ${sectionCard(
        "Financial Sustainability Readiness",
        "Can the system last?",
        progressList([
          ["Revenue Collection", "92"],
          ["Cost Recovery", "88"],
          ["O&M Reserve Coverage", "78"],
          ["Maintenance Cost Control", "86"],
          ["Funding Leverage", "74"],
          ["Affordability Protection", "69"]
        ])
      )}
    </div>
  `;
}

function renderSafety() {
  return `
    <div class="grid kpi-grid">
      ${metricCard("✓", "green", "Electrical Safety Incidents", "0", "No recordable electrical safety incidents")}
      ${metricCard("🔋", "blue", "Battery Safety Events", "0", "No reportable battery safety events")}
      ${metricCard("🔒", "purple", "Cybersecurity Alerts", "2 low", "Low-severity alerts resolved")}
      ${metricCard("📋", "cyan", "Inspection Compliance", "100%", "All scheduled inspections completed")}
      ${metricCard("👷", "yellow", "Operator Training Completion", "88%", "Required operator training completion")}
      ${metricCard("⏱", "green", "Emergency Response Target", "< 4 hrs", "Target response time for priority issues")}
    </div>

    <div class="alert info">
      <div>
        <strong>Smart Target</strong>
        <p>Zero safety incidents and 100% compliance with operating procedures.</p>
      </div>
    </div>

    <div class="grid two-col">
      ${sectionCard(
        "Safety & Security Monitor",
        "Current alerts and operating risks",
        `
        <div class="risk-list">
          <div class="risk-row risk-low"><strong>Electrical safety incidents: 0</strong><span>Clear</span></div>
          <div class="risk-row risk-low"><strong>Battery safety events: 0</strong><span>Clear</span></div>
          <div class="risk-row risk-low"><strong>Cybersecurity alerts: 2 low-severity alerts resolved</strong><span>Low</span></div>
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
          <div class="stack-row"><span>3</span><strong>Schools and learning loads</strong></div>
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
      ${metricCard("♀", "purple", "Women Participating", "58%", "Women participating in workforce activities")}
      ${metricCard("📜", "blue", "Technical Certifications Earned", "14", "Formal technical certifications completed")}
      ${metricCard("🧰", "yellow", "Local Technicians Trained", "12", "Technicians prepared for operations and maintenance")}
      ${metricCard("👥", "cyan", "Community Workshops Delivered", "9", "Workshops held with local participants")}
      ${metricCard("✓", "green", "Training Completion", "91%", "Completion rate for planned workforce activities")}
    </div>

    <div class="alert">
      <div>
        <strong>Smart Target</strong>
        <p>Build a skilled local workforce capable of operating and maintaining the system.</p>
      </div>
      <button class="btn">Workforce Target</button>
    </div>

    <section class="card">
      <h3 class="panel-title">Workforce Development Summary</h3>
      <p class="panel-subtitle">Creating local capacity for long-term success</p>
      <table>
        <thead>
          <tr>
            <th>Workforce Metric</th>
            <th>Current Result</th>
            <th>Why It Matters</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Students Trained</td><td><strong>48</strong></td><td>Builds the future local energy talent pipeline.</td></tr>
          <tr><td>Women Participating</td><td><strong>58%</strong></td><td>Improves inclusion and access to technical opportunity.</td></tr>
          <tr><td>Technical Certifications Earned</td><td><strong>14</strong></td><td>Shows measurable skill development and readiness.</td></tr>
          <tr><td>Local Technicians Trained</td><td><strong>12</strong></td><td>Supports local operations, maintenance, and faster response.</td></tr>
          <tr><td>Community Workshops Delivered</td><td><strong>9</strong></td><td>Builds trust, understanding, and adoption.</td></tr>
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
        "Corridor Deployment Notes",
        "Why this geography is realistic for Phase 1",
        `
        <div class="mini-list">
          <div class="mini-item">
            <strong>Tamale anchor hub</strong>
            <p>Primary logistics and service node for health, education, operations, and monitoring.</p>
          </div>
          <div class="mini-item">
            <strong>Savelugu opportunity node</strong>
            <p>Corridor extension for clinics, schools, water systems, market activity, and productive-use loads.</p>
          </div>
          <div class="mini-item">
            <strong>Right-sized scope</strong>
            <p>Large enough to demonstrate impact, but still realistic to finance, operate, maintain, and monitor.</p>
          </div>
          <div class="mini-item">
            <strong>Dashboard purpose</strong>
            <p>Connects technical performance to community outcomes, economic opportunity, financial sustainability, safety, and local workforce development.</p>
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
    ["Households Connected", "Households directly or indirectly benefiting from improved services.", "Community Impact", "Program estimate", "Quarterly"],
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
      <p class="panel-subtitle">Definitions, sources, and reporting cadence for every KPI in the slide framework</p>
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
        <p>This view compares baseline conditions, current modeled status, and the Phase 1 target for the Tamale–Savelugu Opportunity Corridor.</p>
      </div>
    </div>

    <div class="grid three-col">
      <section class="card scenario-summary blue">
        <h3>Baseline</h3>
        <p>Before meaningful corridor-scale intervention</p>
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
      <p class="panel-subtitle">From baseline to realistic Phase 1 target</p>
      ${comparisonBars("System Uptime", "58", "91", "99", "%")}
      ${comparisonBars("Critical Load Availability", "41", "88", "99", "%")}
      ${comparisonBars("Households Connected / Benefiting", "20", "54", "82", "%")}
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
        "What this dashboard measures",
        "A KPI-driven command center for PowerLink Ghana 2050",
        `
        <p>This dashboard measures whether the proposed energy system is working technically, financially, safely, and socially.</p>
        <p>It directly matches the six KPI families from the project slide: Energy & Reliability, Community Impact, Economic Development, Financial Sustainability, Safety & Security, and Workforce Development.</p>
        `
      )}

      ${sectionCard(
        "Why realism matters",
        "Phase 1 is sized to the Tamale–Savelugu Opportunity Corridor",
        `
        <p>The dashboard is not a national rollout. It is sized for a realistic first-phase corridor deployment with credible counts for clinics, schools, households, local businesses, cold storage, workforce training, and budget.</p>
        <p><strong>Power generation is the output. Community impact is the outcome.</strong></p>
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
