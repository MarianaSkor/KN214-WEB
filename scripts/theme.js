function switchBtnTheme() {
  let switchBtn = document.querySelector('.dark_theme');
  let switchBtn_ = document.querySelector('.light_theme');
  let light = true;


  const lightPalette = {
    main_c: '#ffffff',
    fon_header: '#343434',
    fon_header_line: '5px solid #59595a',
    footer_back:'#343434',
    footer_line: '5px solid #59595a',
    upper: 'rgb(120, 109, 107)',
    h1:'#2F4F4F',
    h2:'#2F4F4F',
    text:'#2F4F4F'
  }

  const darkPalette = {
    main_c:  'rgba(115, 117, 241, 0.938)',
    fon_header: 'rgba(4, 1, 24, 0.98)',
    fon_header_line: '5px solid rgba(24, 11, 105, 0.98)',
    footer_back:'rgba(4, 1, 24, 0.98)',
    footer_line: '5px solid rgba(24, 11, 105, 0.98)',
    upper: '#efe5f4',
    h1:'rgba(24, 11, 105, 0.98)',
    h2:'rgba(24, 11, 105, 0.98)',
    text:'#ffffff'
}

  switchBtn.onclick = function (event) {
    if(light)getElements(darkPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "hidden";
    document.querySelector('.light_theme').style.visibility = "visible";
  }
  switchBtn_.onclick = function (event) {
    if(!light)getElements(lightPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "visible";
    document.querySelector('.light_theme').style.visibility = "hidden";
  }


  function getElements(pallet) {
    document.querySelector('.main').style.backgroundColor = pallet.main_c;
    document.querySelector('.f_header').style.backgroundColor = pallet.fon_header;
    document.querySelector('.f_header').style.borderBottom = pallet.fon_header_line;
    document.querySelector('.up').style.color = pallet.upper;
    document.querySelector('.foot').style.backgroundColor= pallet.footer_back;
    document.querySelector('.foot').style.borderTop = pallet.footer_line;
    document.querySelector('.h_1').style.color = pallet.h1;
    document.querySelector('.h_2').style.color = pallet.h2;
    var last = document.body.querySelectorAll('#popular p');
    for(let i = 0; i < 5; i++){
        last[i].style.color = pallet.text;
    }
  }

}
switchBtnTheme();
