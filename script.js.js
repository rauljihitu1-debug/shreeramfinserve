const t={
en:{title:'Trusted Insurance, RTO & Loan Services',desc:'Professional assistance for Insurance, RTO documentation and Loan guidance in Anand, Gujarat.'},
gu:{title:'વિશ્વાસપાત્ર ઇન્શ્યોરન્સ, RTO અને લોન સેવાઓ',desc:'આણંદ, ગુજરાતમાં ઇન્શ્યોરન્સ, RTO અને લોન માટે વ્યાવસાયિક માર્ગદર્શન.'},
hi:{title:'विश्वसनीय इंश्योरेंस, RTO और लोन सेवाएं',desc:'आनंद, गुजरात में इंश्योरेंस, RTO और लोन के लिए पेशेवर मार्गदर्शन।'}
};
document.getElementById('lang').addEventListener('change',e=>{
 const d=t[e.target.value];
 document.getElementById('title').textContent=d.title;
 document.getElementById('desc').textContent=d.desc;
});
