const main=document.getElementById("main");
const page=document.body.dataset.page;
const content={
home:`
<section class="hero"><div class="hero-content"><div class="eyebrow">NIZAR FORAGE · WATER ENGINEERING</div><h1>Engineering the <span>depths.</span><br>Delivering water.</h1><p>Groundwater exploration, drilling, geophysical investigations and well rehabilitation. Expertise built since 2000.</p><div class="hero-buttons"><a class="cta" href="contact.html" data-i18n="quote">Request a quote ↗</a><a class="btn-outline" href="services.html" data-i18n="discover">Explore our expertise</a></div></div></section>
<div class="stats"><div class="stat"><strong>2000</strong><small data-i18n="since">Established</small></div><div class="stat"><strong>150K+</strong><small data-i18n="meters">Meters drilled*</small></div><div class="stat"><strong>65+</strong><small data-i18n="workers">Workers*</small></div><div class="stat"><strong>24/7</strong><small data-i18n="support">Project support</small></div></div>
<section class="section"><div class="section-head"><div><div class="eyebrow">OUR EXPERTISE</div><h2 data-i18n="servicesTitle">Technical services</h2></div><p data-i18n="servicesIntro">Integrated groundwater and drilling solutions for demanding projects.</p></div><div class="grid3">
<div class="card service-card"><div class="icon-box">◉</div><h3 data-i18n="drilling">Water well drilling</h3><p>Drilling solutions designed for different formations, depth and site requirements.</p><a href="services.html">Discover →</a></div>
<div class="card service-card"><div class="icon-box">⌁</div><h3 data-i18n="geo">Geophysical studies</h3><p>Investigation and evaluation of underground conditions and groundwater resources.</p><a href="services.html">Discover →</a></div>
<div class="card service-card"><div class="icon-box">↻</div><h3 data-i18n="rehab">Well rehabilitation</h3><p>Restoration and maintenance solutions for existing wells and hydraulic structures.</p><a href="services.html">Discover →</a></div>
</div></section>
<section class="section"><div class="section-head"><div><div class="eyebrow">SELECTED WORK</div><h2 data-i18n="projectTitle">Projects & field experience</h2></div><a class="cta" href="projects.html">View projects →</a></div><div class="grid2"><div class="card"><img class="card-img" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=80"><div class="card-body"><h3>El Ghw atine CT 2</h3><p>Water well project documented on the company's original website.</p><a href="projects.html">Learn more →</a></div></div><div class="card"><img class="card-img" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80"><div class="card-body"><h3>Equipment & field operations</h3><p>Specialized equipment and experienced teams supporting projects.</p><a href="services.html">Explore equipment →</a></div></div></div></section>
<section class="band"><div><h2 data-i18n="bandTitle">Let's plan your next water project.</h2><p data-i18n="bandText">Get in touch with our team to discuss your needs.</p></div><a class="cta" href="contact.html" data-i18n="contactUs">Contact us ↗</a></section>
`,
services:`
<section class="page-hero"><div class="breadcrumb">HOME / SERVICES</div><h1 data-i18n="services">Services</h1><p>Technical capabilities, equipment and complementary services for water projects.</p></section>
<section class="section"><div class="grid3">
<div class="card service-card"><div class="icon-box">◉</div><h3 data-i18n="drilling">Water well drilling</h3><p>Drilling services for groundwater extraction and investigation, adapted to site geology and project specifications.</p></div>
<div class="card service-card"><div class="icon-box">⌁</div><h3 data-i18n="geo">Geophysical studies</h3><p>Geophysical investigation and borehole logging to support the evaluation of underground conditions.</p></div>
<div class="card service-card"><div class="icon-box">↻</div><h3 data-i18n="rehab">Well rehabilitation</h3><p>Rehabilitation and servicing of older or damaged wells to restore their operational performance.</p></div>
<div class="card service-card"><div class="icon-box">⚙</div><h3 data-i18n="equipment">Drilling equipment</h3><p>Specialized drilling rigs and auxiliary equipment for drilling and field operations.</p></div>
<div class="card service-card"><div class="icon-box">▤</div><h3 data-i18n="stock">Pipes & screens</h3><p>Reserve stocks of pipes and Johnson screens for drilling installations.</p></div>
<div class="card service-card"><div class="icon-box">⇧</div><h3 data-i18n="pumping">Development & pumping</h3><p>Equipment for development operations, pumping and supporting well installation.</p></div>
</div></section>
<section class="section"><div class="section-head"><h2 data-i18n="fleet">Equipment capabilities</h2></div><div class="grid3">
<div class="card"><img class="card-img" src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=900&q=80"><div class="card-body"><h3>UPET P32-1</h3><p>Published capacity: drilling up to 1,500 m. Mast and engine specifications are based on the original website.</p></div></div>
<div class="card"><img class="card-img" src="https://images.unsplash.com/photo-1580901368919-773b3b0c4b1e?auto=format&fit=crop&w=900&q=80"><div class="card-body"><h3>BMKS 800-2</h3><p>Published drilling capacity: 1,000 m.</p></div></div>
<div class="card"><img class="card-img" src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=900&q=80"><div class="card-body"><h3>MAZ BA 15</h3><p>Published drilling capacity: 400 m.</p></div></div>
</div></section>
`,
projects:`
<section class="page-hero"><div class="breadcrumb">HOME / PROJECTS</div><h1 data-i18n="projects">Projects</h1><p>Selected projects and field work.</p></section>
<section class="section"><div class="section-head"><div><div class="eyebrow">PORTFOLIO</div><h2>Our field experience</h2></div></div><div class="grid2">
<div class="card"><img class="project-image" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85"><div class="card-body"><h3>EL GHWATINE CT 2</h3><p>Public contract 04/2020, documented on the company's website with the Regional Delegation for Agricultural Development of Tozeur.</p></div></div>
<div class="card"><img class="project-image" src="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=85"><div class="card-body"><h3>Groundwater infrastructure</h3><p>Specialized drilling and groundwater-related work. Illustrative photograph; actual project photos should replace it.</p></div></div>
<div class="card"><img class="project-image" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=85"><div class="card-body"><h3>Field operations</h3><p>Equipment and site operations supporting drilling projects.</p></div></div>
<div class="card"><img class="project-image" src="https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=900&q=85"><div class="card-body"><h3>Water resources</h3><p>Groundwater exploration, investigation and drilling support.</p></div></div>
</div><p style="color:var(--muted);margin-top:20px">Some images on this demonstration site are illustrative, not verified photographs of company projects.</p></section>
`,
about:`
<section class="page-hero"><div class="breadcrumb">HOME / ABOUT</div><h1 data-i18n="about">About us</h1><p>Engineering experience, specialized teams and equipment.</p></section>

<section class="section">
<div class="grid2">
<div>
<div class="eyebrow">SINCE APRIL 2000</div>
<h2 style="font-size:36px;margin:15px 0">Groundwater expertise in Tunisia</h2>
<p style="color:var(--muted)">Nizar Forage was established in April 2000 and specializes in groundwater exploration, drilling and well rehabilitation. The company describes its authorization and expertise on its original website.</p>
<div class="feature-list">
<div class="feature"><span>01</span><div><b>Technical expertise</b><p>Groundwater exploration, drilling and rehabilitation.</p></div></div>
<div class="feature"><span>02</span><div><b>Specialized equipment</b><p>Drilling rigs, geophysical tools and auxiliary machinery.</p></div></div>
<div class="feature"><span>03</span><div><b>Qualified teams</b><p>Field, technical and administrative professionals.</p></div></div>
</div>
</div>
<img class="card-img" style="height:100%;min-height:350px;border-radius:18px" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80">
</div>
</section>

<section class="section">
<div class="section-head">
<div>
<div class="eyebrow">NIZAR FORAGE</div>
<h2>Our Team</h2>
<p>Meet the professionals of Nizar Forage.</p>
</div>
</div>

<div class="grid3">
<div class="card team-card"><div class="card-body"><h3>Dr. Ing. Marwen BOUASKER</h3><p>Directeur Général</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Mariem KHALIFA</h3><p>Responsable Financier et Administratif</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Jihen JAZIRI</h3><p>Responsable des ressources humaines</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Manel LAMOUCHI</h3><p>Responsable des appels d'offres</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Rim HATTAB</h3><p>Aide comptable</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Amine HRAIECH</h3><p>Ingénieur Mécanique</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Mohamed BOUASKER</h3><p>Ingénieur hydrogéologue</p></div></div>
<div class="card team-card"><div class="card-body"><h3>Raoudha ABDESSLEM</h3><p>Responsable juridique</p></div></div>
</div>
</section>

<section class="band">
<div><h2>Built on experience. Focused on water.</h2><p>Discover the company's capabilities and contact the team.</p></div>
<a class="cta" href="contact.html">Contact →</a>
</section>
`,
contact:`
<section class="page-hero"><div class="breadcrumb">HOME / CONTACT</div><h1 data-i18n="contact">Contact us</h1><p>Let's discuss your next drilling or groundwater project.</p></section>
<section class="section"><div class="contact-grid"><div class="contact-box"><h2>Get in touch</h2><div class="feature-list"><div class="feature"><span>☎</span><div><b>Phone</b><p>+216 73 203 342</p></div></div><div class="feature"><span>✉</span><div><b>Email</b><p>contact@nizarforage.com</p></div></div><div class="feature"><span>⌖</span><div><b>Location</b><p>Taher SFAR road, 4000 Sousse, Tunisia</p></div></div></div><a class="cta" style="margin-top:25px" href="https://nizarforage.com/contact-us/">Original contact page ↗</a></div>
<div class="contact-box"><h2>Project enquiry</h2><form id="quoteForm"><label>Name</label><input id="name" required placeholder="Your name"><label>Email</label><input id="email" type="email" required placeholder="Email address"><label>Project type</label><select id="type"><option>Water well drilling</option><option>Geophysical studies</option><option>Well rehabilitation</option><option>Equipment</option><option>Other</option></select><label>Message</label><textarea id="message" required placeholder="Describe your project..."></textarea><button class="cta" style="width:100%;margin-top:20px" type="submit">Prepare enquiry ↗</button></form><p style="margin-top:12px;color:var(--muted);font-size:12px">This form opens your email application. It does not store submitted information on this website.</p></div></div></section>
`
};
main.innerHTML=content[page]||content.home;

/* Settings and interaction */
const overlay=document.getElementById("overlay"),panel=document.getElementById("panel"),pc=document.getElementById("panelContent"),toast=document.getElementById("toast");
function openPanel(html){pc.innerHTML=html;overlay.classList.add("open");panel.classList.add("open")}
function closePanel(){overlay.classList.remove("open");panel.classList.remove("open")}
document.getElementById("closePanel").onclick=closePanel;overlay.onclick=closePanel;
document.getElementById("mobileBtn").onclick=()=>document.getElementById("mobileNav").classList.toggle("open");
document.getElementById("langBtn").onclick=()=>document.getElementById("langMenu").classList.toggle("open");
function showToast(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3000)}
document.getElementById("settingsBtn").onclick=()=>openPanel(`<h2>Settings</h2><p>Customize your browsing experience.</p><button class="option" id="themeToggle">☼ / ☾ Toggle light and dark theme</button><button class="option" id="fontToggle">A+ Change text size</button><p>Choose your language from the FR dropdown in the navigation.</p>`);
document.getElementById("accountBtn").onclick=()=>openPanel(`<h2>Account</h2><p>Google account integration requires secure authentication setup by the website owner.</p><button class="option" id="googleBtn">Continue with Google (setup required)</button><p>Authentication is not active in this local demo.</p>`);
document.getElementById("searchBtn").onclick=()=>openPanel(`<h2>Search this website</h2><input id="searchInput" class="search-field" placeholder="Search services, projects..."><div id="searchResults"></div>`);
document.getElementById("langMenu").querySelectorAll("button").forEach(b=>b.onclick=()=>{setLang(b.dataset.lang);document.getElementById("langMenu").classList.remove("open")});
document.addEventListener("click",e=>{
 if(e.target.id==="themeToggle"){document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")}
 if(e.target.id==="fontToggle"){document.body.style.fontSize=document.body.style.fontSize==="18px"?"":"18px"}
 if(e.target.id==="googleBtn")showToast("Google login requires OAuth configuration.");
});
if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark");
const translations={
en:{home:"Home",services:"Services",projects:"Projects",about:"About",contact:"Contact",quote:"Request a quote ↗",available:"Available for your projects",footerDesc:"Professional groundwater exploration and drilling solutions.",explore:"Explore",rights:"All rights reserved",servicesTitle:"Technical services",servicesIntro:"Integrated groundwater and drilling solutions for demanding projects.",drilling:"Water well drilling",geo:"Geophysical studies",rehab:"Well rehabilitation",discover:"Explore our expertise",projectTitle:"Projects & field experience",bandTitle:"Let's plan your next water project.",bandText:"Get in touch with our team to discuss your needs.",contactUs:"Contact us ↗",since:"Established",meters:"Meters drilled*",workers:"Workers*",support:"Project support",equipment:"Drilling equipment",stock:"Pipes & screens",pumping:"Development & pumping",fleet:"Equipment capabilities"},
fr:{home:"Accueil",services:"Services",projects:"Projets",about:"Entreprise",contact:"Contact",quote:"Demander un devis ↗",available:"Disponible pour vos projets",footerDesc:"Solutions professionnelles de recherche et forage d'eau.",explore:"Explorer",rights:"Tous droits réservés",servicesTitle:"Services techniques",servicesIntro:"Solutions intégrées de recherche d'eau et de forage.",drilling:"Forage de puits",geo:"Études géophysiques",rehab:"Réhabilitation de puits",discover:"Découvrir nos compétences",projectTitle:"Projets & expérience",bandTitle:"Préparons votre prochain projet hydraulique.",bandText:"Contactez notre équipe pour discuter de vos besoins.",contactUs:"Nous contacter ↗",since:"Fondée en",meters:"Mètres forés*",workers:"Personnel*",support:"Assistance projets",equipment:"Appareils de forage",stock:"Tubages & crépines",pumping:"Développement & pompage",fleet:"Équipements"},
ar:{home:"الرئيسية",services:"الخدمات",projects:"المشاريع",about:"الشركة",contact:"اتصل بنا",quote:"طلب عرض سعر ↗",available:"متاح لمشاريعكم",footerDesc:"حلول احترافية للبحث عن المياه وحفر الآبار.",explore:"استكشف",rights:"جميع الحقوق محفوظة",servicesTitle:"خدماتنا التقنية",servicesIntro:"حلول متكاملة للبحث عن المياه وحفر الآبار.",drilling:"حفر الآبار",geo:"الدراسات الجيوفيزيائية",rehab:"إعادة تأهيل الآبار",discover:"اكتشف خدماتنا",projectTitle:"المشاريع والخبرة",bandTitle:"لنخطط لمشروع المياه القادم.",bandText:"تواصل مع فريقنا لمناقشة احتياجاتك.",contactUs:"اتصل بنا ↗",since:"منذ التأسيس",meters:"متر حفر*",workers:"عامل*",support:"دعم المشاريع",equipment:"معدات الحفر",stock:"الأنابيب والمصافي",pumping:"التطوير والضخ",fleet:"المعدات"}
};
function setLang(l){document.documentElement.lang=l;document.documentElement.dir=l==="ar"?"rtl":"ltr";document.getElementById("langBtn").textContent=l.toUpperCase()+" ▾";document.querySelectorAll("[data-i18n]").forEach(el=>{if(translations[l][el.dataset.i18n])el.textContent=translations[l][el.dataset.i18n]});localStorage.setItem("lang",l)}
setLang(localStorage.getItem("lang")||"fr");
document.querySelectorAll(".faq button").forEach(b=>b.onclick=()=>b.parentElement.classList.toggle("open"));
const form=document.getElementById("quoteForm");if(form)form.onsubmit=e=>{e.preventDefault();let body=`Name: ${name.value}\nEmail: ${email.value}\nProject: ${type.value}\nMessage: ${message.value}`;location.href="mailto:contact@nizarforage.com?subject="+encodeURIComponent("Project enquiry - Nizar Forage")+"&body="+encodeURIComponent(body)};
document.addEventListener("input",e=>{if(e.target.id==="searchInput"){const q=e.target.value.toLowerCase(),r=document.getElementById("searchResults");const items=[["Home","index.html"],["Services","services.html"],["Projects","projects.html"],["About","about.html"],["Contact","contact.html"],["Water well drilling","services.html"],["Geophysical studies","services.html"],["Well rehabilitation","services.html"]];r.innerHTML=items.filter(x=>x[0].toLowerCase().includes(q)).map(x=>`<button class="option" onclick="location.href='${x[1]}'">${x[0]} →</button>`).join("")}});
