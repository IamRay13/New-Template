document.getElementById('requestType').addEventListener('change', function() {
    const faxOptions = document.getElementById('faxOptions');
    const schedulingOptions = document.getElementById('schedulingOptions');
    
    if (this.value === 'fax') {
        faxOptions.classList.remove('hidden');
        schedulingOptions.classList.add('hidden');
    } else if (this.value === 'scheduling') {
        schedulingOptions.classList.remove('hidden');
        faxOptions.classList.add('hidden');
    } else {
        faxOptions.classList.add('hidden');
        schedulingOptions.classList.add('hidden');
    }
});

document.getElementById('faxDocument').addEventListener('change', function() {
    const textArea = document.getElementById('faxText');
    switch (this.value) {
        case 'swo':
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions.\nThank you for your prompt attention!\n\n----------------------------------------------------------\nFrom: Tariao, Raymond\nPhone: (484) 567-0666\nFax: (484) 362-1480\n\nPhone: 4845670666\nFax: 4843621480";
            break;
        case 'cmn':
            textArea.value = "IMPORTANT!\n\nThe answer keys are located on the back of the sheet. We kindly request that the doctor accurately and completely fill out the form for insurance billing purposes on behalf of the patient, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions.\nThank you for your prompt attention!\n\n----------------------------------------------------------\nFrom: Tariao, Raymond\nPhone: (484) 567-0666\nFax: (484) 362-1480\n\nPhone: 4845670666\nFax: 4843621480";
            break;
        case '6mwt':
            textArea.value = "Good day! Patient is due for 5-year O2 requalification. Requesting a copy of a qualifying 6-minute walk test from any year to be used in requalifying patient. For questions, you may call 484-567-0666. Thank you!\n\n----------------------------------------------------------\nFrom: Tariao, Raymond\nPhone: (484) 567-0666\nFax: (484) 362-1480\n\nPhone: 4845670666\nFax: 4843621480";
            break;
        case 'tss':
            textArea.value = "Good day! Patient is due for 5-year O2 requalification. Requesting a copy of a qualifying Titration Sleep Study from any year to be used in requalifying patient. For questions, you may call 484-567-0666. Thank you!\n\n----------------------------------------------------------\nFrom: Tariao, Raymond\nPhone: (484) 567-0666\nFax: (484) 362-1480\n\nPhone: 4845670666\nFax: 4843621480";
            break;
        case 'pocRx':
            textArea.value = "*****IMPORTANT*****\n\nWe would like to request for a prescription for a Portable Oxygen Concentrator for the patient, [Patient's Full Name], as it is more convenient and lighter for her needs.\n\nPlease send the prescription to Main Fax: (484) 362-1480\nAlternate Fax#: (866) 503-8207 at your earliest convenience.";
            break;
        case 'ftouch':
            textArea.value = "This patient is currently being reviewed by the Centralized RUL team.\nIf the patient calls in with any questions please transfer them to (484) 567-0666 or Purecloud call queue MedicareRestarts_adapthealth.\nYou can also email this team, 60monthrestarts@adapthealth.com for a status update.\n\nPatient has had Oxygen equipment for 60 months. If patient elects to not restart all oxygen equipment will need to be picked up and the patient will have to switch providers.\n\n\nAssessment Team Review:\n\nDoes the insurance cap?\n\nTesting:\n\n- RA @ rest\n- RA ambulation\n- Ambulation on O2\n- Nocturnal \n- LPM\n\nDate Testing was completed:\n\nComments:\n\nVERIFY\n\nType of Usage (24hrs/ nocturnal only/ ambulation):\n\nCurrent ordering doctor:\n\nMost recent/upcoming appt date to discuss O2 usage:\n\nSam/Sim Results-\n\nE1390:\n\nPortability:\n\nPap:\n\nFinal Review-\n\nWas a new initial CMN created? Y/N\n\nWas the Clinical tab completed?\n\nWhat is needed?";
            break;
        case 'order':
            textArea.value = "5-YR RUL is not due until the DATE. Please do not schedule it until then.\n\n2LPM via NC Continuous / 60Month Restart\n---------------------------------------------------------------------------------\nPlease have patient sign 60-month letter when completing exchange/restart located in OTL.\n---------------------------------------------------------------------------------\nCLAIM NOTE\n\nRUL MET E1390 INITIAL 05032019\n---------------------------------------------------------------------------------\nCSR, Scheduling\n---------------------------------------------------------------------------------\n\nBL-E1390-5LPM\nBL-K0738\nBL-E1392\nOXY PORTABILITY\nBL-E0443\n\n2LPM Oxygen Via NC At rest\n2LPM Oxygen Via NC with exertion";
            break;
        case 'template':
            textArea.value = "What’s needed:\n| Item/s: E1390 &\n| RUL Date:\n| CMN Expiration:\n\n| Doctor call: 0/5\n| GoScripts: 0/2\n| Parachute: 0/2\n| Patient Call: 0/3\n| Faxes sent: 0/5\n\n| Insurance:\n| Policy Number:\n| Checked Eligibility: Yes No\n| DNC/DNF: Yes No\n| GoScripts: Yes No\n| Parachute: Yes No\n\n| Doctor:\n(PECOS)\n| NPI:\n| Phone Number:\n| Fax Number:\n\n| Testing: Initial O2 from DATE, 6MWT - RAAR CODE%, RAEx CODE%, Exertion with 2LPM oxygen CODE%.\n| Usage: 2LPM via NC Continuous/Nocturnal\n| Can SWO be used: Yes No\n\n| Remark/s: We got valid testing. Created CMN - CODE. The provider is enrolled with parachute, created order and sent it through. Retained SB.";
            break;
        case 'ono':
            textArea.value = "Good day! Patient is due for 5-year O2 requalification. Requesting a copy of a qualifying Overnight Oximetry Test from any year to be used in requalifying patient. For questions, you may call 484-567-0666. Thank you!\n\n----------------------------------------------------------\nFrom: Tariao, Raymond\nPhone: (484) 567-0666\nFax: (484) 362-1480\n\nPhone: 4845670666\nFax: 4843621480";
            break;
        case 'availability':
            textArea.value = "Hello Good morning, NAME!\n\nI hope this email finds you well.\n\nI would like to inquire if you could assist a patient living at ADDRESS. This patient is due for a 5-year requalification, and we received an order for a POC and would like to verify availability for this patient.\n\nPatient Name:\nPatient ID:\nAddress:\n\nYour prompt attention to this matter would be greatly appreciated. Thank you and have a great day!";
            break;

        default:
            textArea.value = "";
    }
});

document.getElementById('schedulingDocument').addEventListener('change', function() {
    const textArea = document.getElementById('schedulingText');
    switch (this.value) {
        case 'medicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| Comment/s: \nWe got valid testing and received signed CMN.\nLogged CMN.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        case 'nonMedicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| Comment/s: \nWe got valid testing and received signed SWO.\nInstructed not to log SWO.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        default:
            textArea.value = "";
    }
});
