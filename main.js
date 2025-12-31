/*==========================================================================
                    General Use and Utility Functions
==========================================================================*/
function el(id) {
    return document.getElementById(id);
};
function hide(id) {
    document.getElementById(id).style.display = 'none';
};
function enableElement(element) {
    element.classList.add('enabled');
};
function disableElement(element) {
    element.classList.remove('enabled');
};
/*==========================================================================
                    Data Load Functions
==========================================================================*/
var Armor = {};
Armor.Head = [];

Armor.LoadHeadPieces = async function() {
    await $.getJSON('./data/armor-head.json', function(response) {
        $.each(response, function(i) {
            new ArmorObject(0, this.name, '', this.skill1, this.skill2, this.skill3, this.setSkill);
        });
    });
};
Armor.CreateHeadSelection = function() {
    Armor.Head.forEach(function(i) {
        var select = el("head").appendChild(document.createElement("option"));
        select.innerHTML = i.name;
    }) 
    
}
Armor.Load = async function() {
    await Armor.LoadHeadPieces();
    Armor.CreateHeadSelection();

}