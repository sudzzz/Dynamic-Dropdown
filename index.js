let divisionDropdown = document.getElementById('division');
divisionDropdown.length = 0;

let defaultDivisionOption = document.createElement('option');
defaultDivisionOption.text = '---SELECT DIVISION---';

divisionDropdown.add(defaultDivisionOption);
divisionDropdown.selectedIndex = 0;

let zoneDropdown = document.getElementById('zone');
zoneDropdown.length = 0;

let defaultZoneOption = document.createElement('option');
defaultZoneOption.text = "---SELECT ZONE---"; 

zoneDropdown.add(defaultZoneOption);
zoneDropdown.selectedIndex = 0;

var flag = 0;

const division = [
    {
        "id" : "NR",
        "value" : "Northern Railway"
    },
    {
        "id" : "CR",
        "value" : "Central Railway"
    },
    {
        "id" : "ER",
        "value" : "Eastern Railway"
    },
    {
        "id" : "SR",
        "value" : "Southern Railway"
    }
]
let divisionOption;

for(let i = 0;i < division.length; i++){
    divisionOption = document.createElement('option');
    divisionOption.text = division[i].value;
    divisionOption.value = division[i].id;
    divisionDropdown.add(divisionOption);
}
divisionDropdown.addEventListener('change', function(){
    if(flag == 0){
        divisionDropdown.remove(defaultDivisionOption)
    }
    flag = flag+1;
    zoneDropdown.length = 0
    let selectedDivision = event.target.value

    
    const zone = [
        {
            "division" : "NR",
            "zone" : "Ambala"
        },
        {
            "division" : "NR",
            "zone" : "Delhi"
        },
        {
            "division" : "NR",
            "zone" : "Ferozpur"
        },
        {
            "division" : "NR",
            "zone" : "Lucknow"
        },
        {
            "division" : "NR",
            "zone" : "Moradabad"
        },
        {
            "division" : "CR",
            "zone" : "Nagpur"
        },
        {
            "division" : "CR",
            "zone" : "Pune"
        },
        {
            "division" : "CR",
            "zone" : "Mumbai"
        },
        {
            "division" : "CR",
            "zone" : "Bhusawal"
        },
        {
            "division" : "CR",
            "zone" : "Solapur"
        }
    ]
    let zoneOption
    for(let i=0; i < zone.length; i++){
        if(zone[i].division == selectedDivision){
            zoneOption = document.createElement('option');
            zoneOption.text = zone[i].zone;
            zoneOption.value = zone[i].zone;
            zoneDropdown.add(zoneOption)
        }
    }
});