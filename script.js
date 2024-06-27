//faq accordion
document.addEventListener('DOMContentLoaded',()=>{
    const faqcontainer=document.querySelector('.faq-content')

    faqcontainer.addEventListener('click',(e)=>{
       const grphdr=e.target.closest('.faq-group-header')

       if(!grphdr) return;
       const grp=grphdr.parentElement;
       const grpbody=grp.querySelector('.faq-group-body');
       const icon=grphdr.querySelector('i');

        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        //toggle visibilty of body
        grpbody.classList.toggle('open')

        //close other open bodies

        const otherGroups = faqcontainer.querySelectorAll('.faq-group');

        otherGroups.forEach((otherGroup) => {
          if (otherGroup !== grp) {
            const otherGroupBody = otherGroup.querySelector('.faq-group-body');
            const otherIcon = otherGroup.querySelector('.faq-group-header i');
    
            otherGroupBody.classList.remove('open');
            otherIcon.classList.remove('fa-minus');
            otherIcon.classList.add('fa-plus');
          }
        });
      });
    });
