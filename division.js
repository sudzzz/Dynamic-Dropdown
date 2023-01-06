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


fetch('/division.json').then(
    response => response.json().then(function(division){
        let divisionOption;

        for(let i = 0;i < division.length; i++){
            divisionOption = document.createElement('option');
            divisionOption.text = division[i].value;
            divisionOption.value = division[i].id;
            divisionDropdown.add(divisionOption);
        }

    })
);

divisionDropdown.addEventListener('change', function(){
    zoneDropdown.length = 0
    divisionDropdown.remove(defaultDivisionOption)
    let selectedDivision = event.target.value

    fetch('./zone.json').then(
        response => response.json().then(function(zone){
            let zoneOption
            for(let i=0; i < zone.length; i++){
                if(zone[i].division == selectedDivision){
                    zoneOption = document.createElement('option');
                    zoneOption.text = zone[i].zone;
                    zoneOption.value = zone[i].zone;
                    zoneDropdown.add(zoneOption)
                }
            }
        })
    )
    
});