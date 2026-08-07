
document.getElementById('year').textContent = new Date().getFullYear();

const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav-links');
if(toggle&&nav){toggle.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));}

const productData={
'8':{title:'8 oz Standard',kicker:'Standard format',desc:'Compact format for functional beverages, samples, and specialty products.',use:'Functional beverages, samples',status:'Launch planning',cls:'can-8'},
'12s':{title:'12 oz Standard',kicker:'Standard format',desc:'Familiar soda-can proportions for mainstream beverage applications.',use:'Soda, juice, sparkling beverages',status:'Launch planning',cls:'can-12s'},
'12k':{title:'12 oz Sleek',kicker:'Premium format',desc:'A narrower, modern silhouette for energy, wellness, and premium beverages.',use:'Energy, wellness, premium drinks',status:'Launch planning',cls:'can-12k'},
'16':{title:'16 oz Standard',kicker:'Priority launch format',desc:'A versatile format for teas, energy drinks, juices, and premium beverages.',use:'Tea, energy, juice, RTD',status:'Priority launch size',cls:'can-16'},
'other':{title:'Other / Custom',kicker:'Future format',desc:'Need a different size or shape? Tell us what you need and we can evaluate mold options.',use:'Custom applications',status:'Demand-based',cls:'can-other'}
};
document.querySelectorAll('.size-tab').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.size-tab').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const d=productData[btn.dataset.size];document.getElementById('product-can').className='can-visual '+d.cls;document.getElementById('product-kicker').textContent=d.kicker;document.getElementById('product-title').textContent=d.title;document.getElementById('product-desc').textContent=d.desc;document.getElementById('product-use').textContent=d.use;document.getElementById('product-status').textContent=d.status;}));

const otherCheck=document.getElementById('other-product-check'),otherWrap=document.getElementById('other-product-wrap');
if(otherCheck&&otherWrap){const updateOther=()=>otherWrap.classList.toggle('hidden',!otherCheck.checked);otherCheck.addEventListener('change',updateOther);updateOther();}

let currentStep=1;
const steps=[...document.querySelectorAll('.form-step')],progress=[...document.querySelectorAll('.progress-step')],prevBtn=document.querySelector('.prev-btn'),nextBtn=document.querySelector('.next-btn'),submitBtn=document.querySelector('.submit-btn');
function renderStep(){steps.forEach(s=>s.classList.toggle('active',Number(s.dataset.step)===currentStep));progress.forEach(p=>p.classList.toggle('active',Number(p.dataset.step)<=currentStep));prevBtn.style.visibility=currentStep===1?'hidden':'visible';nextBtn.classList.toggle('hidden',currentStep===5);submitBtn.classList.toggle('hidden',currentStep!==5);}
function validateCurrentStep(){const active=document.querySelector(`.form-step[data-step="${currentStep}"]`);for(const field of [...active.querySelectorAll('[required]')]){if(!field.checkValidity()){field.reportValidity();return false;}}return true;}
nextBtn.addEventListener('click',()=>{if(!validateCurrentStep())return;if(currentStep<5){currentStep++;renderStep();document.getElementById('loi').scrollIntoView({behavior:'smooth'});}});
prevBtn.addEventListener('click',()=>{if(currentStep>1){currentStep--;renderStep();document.getElementById('loi').scrollIntoView({behavior:'smooth'});}});
renderStep();
