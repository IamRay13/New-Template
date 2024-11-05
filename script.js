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
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions.\nThank you for your prompt attention!";
            break;
        case 'cmn':
            textArea.value = "IMPORTANT!\n\nThe answer keys are located on the back of the sheet. We kindly request that the doctor accurately and completely fill out the form for insurance billing purposes on behalf of the patient, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions.\nThank you for your prompt attention!";
            break;
        case '6mwt':
            textArea.value = "Good day! Patient is due for 5-year O2 requalification. Requesting a copy of a qualifying 6-minute walk test from any year to be used in requalifying patient. For questions, you may call 484-567-0666. Thank you!";
            break;
        case 'tss':
            textArea.value = "Good day! Patient is due for 5-year O2 requalification. Requesting a copy of a qualifying Titration Sleep Study from any year to be used in requalifying patient. For questions, you may call 484-567-0666. Thank you!";
            break;
        case 'pocRx':
            textArea.value = "*****IMPORTANT*****\n\nWe would like to request for a prescription for a Portable Oxygen Concentrator for the patient, [Patient's Full Name], as it is more convenient and lighter for her needs.\n\nPlease send the prescription to Main Fax: (484) 362-1480\nAlternate Fax#: (866) 503-8207 at your earliest convenience.";
            break;
        case 'ftouch':
            textArea.value = "This patient is currently being reviewed by the Centralized RUL team.\nIf the patient calls in with any questions please transfer them to (484) 567-0666 or Purecloud call queue MedicareRestarts_adapthealth.\nYou can also email this team, 60monthrestarts@adapthealth.com for a status update.\n\nPatient has had Oxygen equipment for 60 months. If patient elects to not restart all oxygen equipment will need to be picked up and the patient will have to switch providers.\n\n\nAssessment Team Review:\n\nDoes the insurance cap?\n\nTesting:\n\n- RA @ rest\n- RA ambulation\n- Ambulation on O2\n- Nocturnal \n- LPM\n\nDate Testing was completed:\n\nComments:\n\nVERIFY\n\nType of Usage (24hrs/ nocturnal only/ ambulation):\n\nCurrent ordering doctor:\n\nMost recent/upcoming appt date to discuss O2 usage:\n\nSam/Sim Results-\n\nE1390:\n\nPortability:\n\nPap:\n\nFinal Review-\n\nWas a new initial CMN created? Y/N\n\nWas the Clinical tab completed?\n\nWhat is needed?";
            break;
        default:
            textArea.value = "";
    }
});

document.getElementById('schedulingDocument').addEventListener('change', function() {
    const textArea = document.getElementById('schedulingText');
    switch (this.value) {
        case 'medicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| Comment/s: We got valid testing and received signed SWO. Instructed not to log SWO.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        case 'nonMedicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| Comment/s: We got valid testing and received signed CMN. Logged CMN.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        default:
            textArea.value = "";
    }
});
