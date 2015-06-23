$(document).ready(function() {
  function parallax(){
    var prlx_1yr_1 = document.getElement
  }
  window.addEventListener("scroll", parallax, false);

  jQuery('#vmap').vectorMap({
    map: 'usa_en',
    backgroundColor: 'gradient.jpg',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: true,
    hoverColor: '#00000',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    selectedColor: '#c9dfaf',
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {

      if (code == "al")
        window.location = "/states/1"

      if (code == "ak")
        window.location = "/states/2"

      if (code == "az")
        window.location = "/states/3"

      if (code == "ar")
        window.location = "/states/4"

      if (code == "ca")
        window.location = "/states/5"

      if (code == "co")
        window.location = "/states/6"

      if (code == "ct")
        window.location = "/states/7"

      if (code == "de")
        window.location = "/states/8"

      if (code == "fl")
        window.location = "/states/9"

      if (code == "ga")
        window.location = "/states/10"

      if (code == "hi")
        window.location = "/states/11"

      if (code == "id")
        window.location = "/states/12"

      if (code == "il")
        window.location = "/states/13"

      if (code == "in")
        window.location = "/states/14"

      if (code == "ia")
        window.location = "/states/15"

      if (code == "ks")
        window.location = "/states/16"

      if (code == "ky")
        window.location = "/states/17"

      if (code == "la")
        window.location = "/states/18"

      if (code == "me")
        window.location = "/states/19"

      if (code == "md")
        window.location = "/states/20"

      if (code == "ma")
        window.location = "/states/21"

      if (code == "mi")
        window.location = "/states/22"

      if (code == "mn")
        window.location = "/states/23"

      if (code == "ms")
        window.location = "/states/24"

      if (code == "mo")
        window.location = "/states/25"

      if (code == "mt")
        window.location = "/states/26"

      if (code == "ne")
        window.location = "/states/27"

      if (code == "nv")
        window.location = "/states/28"

      if (code == "nh")
        window.location = "/states/29"

      if (code == "nj")
        window.location = "/states/30"

      if (code == "nm")
        window.location = "/states/31"

      if (code == "ny")
        window.location = "/states/32"

      if (code == "nc")
        window.location = "/states/33"

      if (code == "nd")
        window.location = "/states/34"

      if (code == "oh")
        window.location = "/states/35"

      if (code == "ok")
        window.location = "/states/36"

      if (code == "or")
        window.location = "/states/37"

      if (code == "pa")
        window.location = "/states/38"

      if (code == "ri")
        window.location = "/states/39"

      if (code == "sc")
        window.location = "/states/40"

      if (code == "sd")
        window.location = "/states/41"

      if (code == "tn")
        window.location = "/states/42"

      if (code == "tx")
        window.location = "/states/43"

      if (code == "ut")
        window.location = "/states/44"

      if (code == "vt")
        window.location = "/states/45"

      if (code == "va")
        window.location = "/states/46"

      if (code == "wa")
        window.location = "/states/47"

      if (code == "wv")
        window.location = "/states/48"

      if (code == "wi")
        window.location = "/states/49"

      if (code == "wy")
        window.location = "/states/50"

      }
    });
});
