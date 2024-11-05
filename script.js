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
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions. \nThank you for your prompt attention!";
            break;
        case 'cmn':
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions. \nThank you for your prompt attention!";
            break;
        case '6mwt':
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions. \nThank you for your prompt attention!";
            break;
        case 'tss':
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions. \nThank you for your prompt attention!";
            break;
        case 'pocRx':
            textArea.value = "Good day,\n\nThe patient is due for their 60-month Oxygen Recertification. Kindly complete the CMN, please ensure that the dates and signature should be in the same format.\n\nPlease have DOCTOR sign and fax it back to (484) 362-1480 at your earliest convenience.\n\nFeel free to call us at (484) 567-0666 if you have any questions. \nThank you for your prompt attention!";
            break;
        default:
            textArea.value = "";
    }
});

document.getElementById('schedulingDocument').addEventListener('change', function() {
    const textArea = document.getElementById('schedulingText');
    switch (this.value) {
        case 'medicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| RUL: \n| SWO Expiration: \n| Signed date: \n| Item/s: E1390 & \n| Comment/s:\nWe got valid testing and received signed SWO by CODE. \nInstructed not to log Medicare.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        case 'nonMedicare':
            textArea.value = "What's needed: Scheduling/ 60 Month Restart\n| RUL: \n| SWO Expiration: \n| Signed date: \n| Item/s: E1390 & \n| Comment/s:\nWe got valid testing and received signed SWO by CODE. \nInstructed not to log Non-Medicare.\nCreated New Sales Order - CODE.\nNew Pickup/Exchange - CODE.\nSB flipped to Restart Scheduled.";
            break;
        default:
            textArea.value = "";
    }
});
