let faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', function(){
        faqs.forEach(subFaq => { subFaq.classList.remove('active'); });
        faq.classList.add('active');
    })
})