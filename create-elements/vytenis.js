[6:08 PM] Vytenis Kareiva
    let elements = document.querySelectorAll('[type="text"]')
document.querySelector('[type="range"]')
    .setAttribute('max', elements.length)
// foreach, tai reiskia kiekvienam, tai kaip for loop, jis grazina keikviena elementa atskirai
elements.forEach(function (element) {​​​
    // kiekvienam elementui uzdedu event listener
element.addEventListener('keyup', function(event) {​​​
        let numberOfNotEmptyElements = 0
// kiekviena elementa patikrinu
elements.forEach(function (element){​​​
                let notEmpty = element.value.length > 0
if (notEmpty) {​​​
                    numberOfNotEmptyElements++
                }​​​
            }​​​)
        // pakeiciu range i uzpildytus inputus
document.querySelector('[type="range"]').value = numberOfNotEmptyElements
}​​​)
}​​​)
<https://teams.microsoft.com/l/message/19:FE3_lH3ziw-4y0Zdb3ym2XpKAInrB-UE0Ltnd3iNnJ01@thread.tacv2/1635260917899?tenantId=08455b90-5d90-4a89-937b-8c2322b2c786&amp;groupId=d3b4b784-1ede-4b99-bdb2-f1945badaf26&amp;parentMessageId=1633266510924&amp;teamName=VIGI 6 gr. Kaunas&amp;channelName=General&amp;createdTime=1635260917899>