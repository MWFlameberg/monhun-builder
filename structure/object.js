BaseObject = function(id, name, desc) {
    this.id = id;
    this.name = name;
    this.desc = desc;
}
ArmorObject = function(id, name, desc, skill1, skill2, skill3, setSkill) {
    this.prototype = BaseObject;
    BaseObject.call(this, id, name, desc);

    this.skill1 = skill1;
    this.skill2 = skill2;
    this.skill3 = skill3;
    this.setSkill = setSkill;
    Armor.Head.push(this);
}