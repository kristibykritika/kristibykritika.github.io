const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
}

const ProdSizeItm = document.querySelector('.sizeProd');
const ProdName = document.querySelector('.ProdName').innerHTML;

const FramedRadio = document.querySelector('.framedRadio');
const UnFramedRadio = document.querySelector('.unframedRadio');

const BuyBtn = document.querySelector('.buyBtn');

framed = false;
unframed = false;
let fixture = String();


function checkForFrame() {
    framed = FramedRadio.checked;
    unframed = UnFramedRadio.checked;
    console.log(framed, unframed);
}

BuyBtn.onclick = function () {

    checkForFrame();
    
    if (framed == false && unframed == false) 
    {
        alert('Please select a fixture mode before purchasing');
        return null;
    } else if (framed == true && unframed == false)
    {
        fixture = "framed";
    } else if (unframed == true && framed == false) 
    {
        fixture = "unframed";
    }
    ProdSize = ProdSizeItm.options[ProdSizeItm.selectedIndex].text;
    console.log(ProdName, ProdSize, fixture);

    message = `Order%20From%20Web%0D%0A${ProdName}%20-%20${ProdSize}%0D%0AFixture%20-%20${fixture}`

    
   
 window.open(`https://wa.me/7585918846/?text=${message}`, "_blank");
}