// // === Form Badges ===

// document.addEventListener("DOMContentLoaded", function () {
//   const isLandingPage =
//     window.location.href.includes("/requests/new") &&
//     !window.location.href.includes("ticket_form_id");

//   if (!isLandingPage) return;

//   // Hide the dropdown selector
//   const formSelector = document.querySelector(".request_ticket_form_id");
//   if (formSelector) formSelector.style.display = "none";

//   const container = document.createElement("div");
//   container.style.display = "flex";
//   container.style.gap = "20px";
//   container.style.margin = "30px 0";
//   container.style.flexWrap = "wrap";

//   function createBadge(text, subtext, bgColor, borderColor, textColor, formId) {
//     const badge = document.createElement("div");

//     badge.innerHTML = `
//       <div style="display: flex; flex-direction: column;">
//         <span style="font-size: 18px; font-weight: bold;">${text}</span>
//         <span style="font-size: 14px; margin-top: 4px;">${subtext}</span>
//       </div>
//     `;

//     badge.style.cssText = `
//       flex: 1;
//       min-width: 280px;
//       padding: 20px;
//       border-radius: 16px;
//       border: 2px solid ${borderColor};
//       background-color: ${bgColor};
//       color: ${textColor};
//       cursor: pointer;
//       transition: box-shadow 0.2s ease;
//     `;
//     badge.onmouseover = () => (badge.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)");
//     badge.onmouseout = () => (badge.style.boxShadow = "none");
//     badge.onclick = () => {
//       window.location.href = `/hc/en-us/requests/new?ticket_form_id=${formId}`;
//     };
//     return badge;
//   }

//   const badgeA = createBadge(
//     "💻 Solutions Developer Requests",
//     "POC ZAF Apps, Help Center themes, mobile POCs, etc.",
//     "#e4f9c3",
//     "#5d9900",
//     "#11110D",
//     "9312830097690"
//   );

//   const badgeB = createBadge(
//     "🧱 Demo Architecture Requests",
//     "Shared Demo Accounts, bugs, feedback & recommendations, etc",
//     "#ffe7fa",
//     "#b42d9f",
//     "#11110D",
//     "9317522572314"
//   );

//   container.appendChild(badgeA);
//   container.appendChild(badgeB);

//   const dropdownWrapper = formSelector?.parentNode;
//   if (dropdownWrapper) dropdownWrapper.appendChild(container);
// });



// === Move Field Descriptions Above Inputs ===
function moveFieldDescriptionAboveInput(fieldId) {
  const fieldWrapper = document.querySelector(`.form-field.request_custom_fields_${fieldId}`);
  if (!fieldWrapper) return;

  const description = fieldWrapper.querySelector('p[id$="_hint"]');
  const input = fieldWrapper.querySelector('input, textarea, .nesty-input, .hc-multiselect');

  if (description && input && input.parentNode) {
    input.parentNode.insertBefore(description, input);
  }
}

// 👤 Customer Information
moveFieldDescriptionAboveInput('360021877431'); // Customer Name -- OLD
moveFieldDescriptionAboveInput('9312800951194'); // Sales Stage
moveFieldDescriptionAboveInput('7446164150676'); // Opportunity Link -- OLD
moveFieldDescriptionAboveInput('9312869853594'); // Existing Customer (checkbox)
moveFieldDescriptionAboveInput('9312840253722'); // Estimated Deal Size (ARR/US)

// 📋 Justification
moveFieldDescriptionAboveInput('9312788682138'); // Customer Ask
moveFieldDescriptionAboveInput('9312815802522'); // How Expressed
moveFieldDescriptionAboveInput('9312814874394'); // Why Valuable
moveFieldDescriptionAboveInput('9312822312474'); // Why Need Support
moveFieldDescriptionAboveInput('9312804913690'); // Reviewed with Manager

// 🛠️ POC Request Details
moveFieldDescriptionAboveInput('13538387629076'); // Instance
moveFieldDescriptionAboveInput('9312805582490'); // POC Type
moveFieldDescriptionAboveInput('9312805789722'); // If "Other", explain
moveFieldDescriptionAboveInput('9312843715866'); // Problem/Opportunity
moveFieldDescriptionAboveInput('9312873208986'); // Include Sketch

// 💸 Budget & Timeline
moveFieldDescriptionAboveInput('9312821255578'); // Reuse Existing
moveFieldDescriptionAboveInput('9312842904602'); // Link to Existing
moveFieldDescriptionAboveInput('9312838694810'); // Why New
moveFieldDescriptionAboveInput('9312871908378'); // Customer Cost Awareness
moveFieldDescriptionAboveInput('9312872193178'); // Target Delivery Date




document.addEventListener("DOMContentLoaded", function () {
  const isTargetFormPage = window.location.href.includes("ticket_form_id=9312830097690");
  if (!isTargetFormPage) return;
  
  // === Grouping Utility ===
  function groupFields(fieldIds, headingText) {
    const wrapper = document.createElement("div");
    wrapper.className = "custom-field-group";
    wrapper.style.border = "1px solid #ddd";
    wrapper.style.borderRadius = "8px";
    wrapper.style.padding = "20px";
    wrapper.style.marginBottom = "24px";
    wrapper.style.backgroundColor = "#f9f9f9";

    const heading = document.createElement("h3");
    heading.textContent = headingText;
    heading.style.marginBottom = "12px";
    wrapper.appendChild(heading);

    fieldIds.forEach(id => {
      const el = document.querySelector(`.form-field.request_custom_fields_${id}`);
      if (el) wrapper.appendChild(el);
    });

    const attach = document.querySelector('#upload-dropzone');
    if (attach && attach.parentNode) {
      attach.parentNode.insertBefore(wrapper, attach);
    }

    return wrapper;
  }

  // === Group Fields ===
  const customerInfoWrapper = groupFields([
    '360021877431', // Customer Name --- OLD
    '9312800951194', // Sales Stage
    '7446164150676', // Opportunity Link --- OLD
    '9312869853594',  // Existing Customer (checkbox)
    '9312840253722' // Estimated Deal Size (ARR/US)
  ], '👤 Customer Information');

  const checkboxField = document.querySelector('.form-field.request_custom_fields_9312869853594');
  if (checkboxField) {
    checkboxField.style.marginTop = "12px";
    customerInfoWrapper.appendChild(checkboxField);
  }

  groupFields([
    '9312788682138', // Customer Ask
    '9312815802522', // How Expressed
    '9312814874394', // Why Valuable
    '9312822312474', // Why Need Support
    '9312804913690'  // Reviewed with Manager
  ], '📋 Justification');

  groupFields([
    '13538387629076', // Specify Instance
    '9312805582490', // POC Type
    '9312805789722', // If "Other", explain
    '9312843715866',  // Problem/Opportunity
    '9312873208986'  // Include Sketch    
  ], '🛠️ POC Request Details');

  groupFields([
    '9312821255578', // Reuse Existing
    '9312842904602', // Link to Existing
    '9312838694810', // Why New
    '9312871908378', // Customer Cost Awareness
    '9312872193178'  // Target Delivery Date
  ], '💸 Budget & Timeline');

 
  function setupDeliveryCountdown() {
  const checkInterval = setInterval(() => {
    const visibleInput = document.querySelector('.request_custom_fields_9312872193178 .datepicker');
    const targetFieldWrapper = document.querySelector('.form-field.request_custom_fields_9312872193178');

    if (!visibleInput || !targetFieldWrapper) return;

    // Stop checking once it's found
    clearInterval(checkInterval);

    // Prevent duplicate insertion
    if (document.querySelector('#delivery-countdown')) return;

    // Build countdown UI
    const countdownMessage = document.createElement('p');
    countdownMessage.id = 'delivery-countdown';
    countdownMessage.style.margin = "8px";
    countdownMessage.style.opacity = "0";
		countdownMessage.style.fontSize = "15px";
    countdownMessage.style.transition = "opacity 0.6s ease";
    countdownMessage.style.color = "#333";

    const warningBox = document.createElement('div');
    warningBox.id = "short-turnaround-warning";
    warningBox.style.display = "none";
    warningBox.style.backgroundColor = "#fff3cd";
    warningBox.style.border = "1px solid #ffeeba";
    warningBox.style.color = "#856404";
    warningBox.style.padding = "12px";
    warningBox.style.marginTop = "12px";
    warningBox.style.borderRadius = "6px";
    warningBox.innerHTML = `⚠️ Heads up: This is a short turnaround! We may not be able to meet the requested delivery date.`;

    targetFieldWrapper.appendChild(countdownMessage);
    targetFieldWrapper.appendChild(warningBox);

    function updateCountdown() {
      const dateValue = visibleInput.value;
      warningBox.style.display = "none";

      if (!dateValue) {
        countdownMessage.style.opacity = "0";
        countdownMessage.textContent = "";
        return;
      }

      const targetDate = new Date(dateValue);
      const today = new Date();
      targetDate.setHours(12, 0, 0, 0);
      today.setHours(12, 0, 0, 0);

      const msPerDay = 1000 * 60 * 60 * 24;
      const diffInMs = targetDate - today;
      const days = Math.round(diffInMs / msPerDay);

      countdownMessage.style.opacity = "1";

      if (isNaN(days)) {
        countdownMessage.textContent = "";
      } else if (days === 0) {
        countdownMessage.textContent = "📅 Delivery is today!";
      } else if (days > 0) {
        countdownMessage.textContent = `📅 ${days} day${days > 1 ? 's' : ''} until delivery`;
        if (days < 7) warningBox.style.display = "block";
      } else {
        countdownMessage.textContent = `⚠️ ${Math.abs(days)} day${Math.abs(days) > 1 ? 's' : ''} past due`;
        countdownMessage.style.color = "#b00020";
      }
    }

    visibleInput.addEventListener("blur", updateCountdown);
    visibleInput.addEventListener("change", updateCountdown);
    updateCountdown();
  }, 200);
}

setupDeliveryCountdown();

  
  // === POC Type Monitoring for Custom ZAF App ===
  function setupPOCTypeMonitoring() {
    const checkInterval = setInterval(() => {
      // Try multiple possible selectors for the POC Type field
      const pocTypeField = document.querySelector('.request_custom_fields_9312805582490 select') ||
                          document.querySelector('select[id*="9312805582490"]') ||
                          document.querySelector('input[id*="9312805582490"]') ||
                          document.querySelector('[name*="9312805582490"]');
      
      const pocTypeFieldWrapper = document.querySelector('.form-field.request_custom_fields_9312805582490');
      
      // Try multiple possible selectors for submit button
      const submitButton = document.querySelector('input[type="submit"]') ||
                          document.querySelector('button[type="submit"]') ||
                          document.querySelector('.form-actions input') ||
                          document.querySelector('.form-actions button') ||
                          document.querySelector('[value*="Submit"]');
      
      // Debug logging
      console.log('POC Type field found:', !!pocTypeField);
      console.log('POC Type wrapper found:', !!pocTypeFieldWrapper);
      console.log('Submit button found:', !!submitButton);
      
      if (!pocTypeField || !pocTypeFieldWrapper) {
        console.log('Waiting for POC Type field to load...');
        return;
      }
      
      // Stop checking once field is found
      clearInterval(checkInterval);
      console.log('POC Type monitoring initialized');
      
      // Create warning message (similar to delivery countdown warning)
      const warningMessage = document.createElement('div');
      warningMessage.id = 'poc-type-warning';
      warningMessage.style.display = 'none';
      warningMessage.style.backgroundColor = '#fff3cd';
      warningMessage.style.border = '1px solid #ffeeba';
      warningMessage.style.color = '#856404';
      warningMessage.style.padding = '12px';
      warningMessage.style.marginTop = '12px';
      warningMessage.style.borderRadius = '6px';
      warningMessage.style.fontSize = '15px';
      warningMessage.innerHTML = `⚠️ <strong>Important:</strong> All engagements that require a custom POC app should first consider using the new <a href="https://support.zendesk.com/hc/en-us/articles/9034700691866-Using-the-App-Builder-EAP" target="_blank" style="color: #0366d6; text-decoration: underline;">AI Powered App Builder</a>. Any custom POC app that requires custom development, would <strong>require approval from SC Leadership</strong>. Our team is available to provide advisory help and support in building procedures for the AI Powered App Builder should that be necessary. Additionally, please note that there is a "Procedure Builder" tool in the new Demo Studio that you may also find helpful in creating instructions for the AI Powered App Builder.`;
      
      // Add warning message to the field wrapper
      pocTypeFieldWrapper.appendChild(warningMessage);
      
      // Create submit button warning message
      const submitWarningMessage = document.createElement('div');
      submitWarningMessage.id = 'submit-button-warning';
      submitWarningMessage.style.display = 'none';
      submitWarningMessage.style.backgroundColor = '#f8d7da';
      submitWarningMessage.style.border = '1px solid #f5c6cb';
      submitWarningMessage.style.color = '#721c24';
      submitWarningMessage.style.padding = '8px 12px';
      submitWarningMessage.style.marginTop = '8px';
      submitWarningMessage.style.borderRadius = '6px';
      submitWarningMessage.style.fontSize = '14px';
      submitWarningMessage.innerHTML = `🚫 <strong>Submit Disabled:</strong> Custom POC app requires SC Leadership approval before submission.`;
      
      function handlePOCTypeChange() {
        const selectedValue = pocTypeField.value;
        console.log('POC Type selected value:', selectedValue);
        
        // Check for multiple possible values that might indicate custom ZAF app
        const isCustomZAFApp = selectedValue === 'asset_type_custom_zaf_app_custom_lookup__360__etc_' ||
                              selectedValue.includes('custom_zaf_app') ||
                              selectedValue.includes('custom_lookup');
        
        console.log('Is Custom ZAF App:', isCustomZAFApp);
        
        if (isCustomZAFApp) {
          // Show warning message
          warningMessage.style.display = 'block';
          
          // Disable submit button and show warning near submit button
          if (submitButton) {
            submitButton.disabled = true;
            submitButton.style.opacity = '0.5';
            submitButton.style.cursor = 'not-allowed';
            submitButton.title = 'Submit disabled: Custom POC app requires SC Leadership approval';
            
            // Add submit warning message near the submit button if not already added
            if (!document.querySelector('#submit-button-warning')) {
              const submitButtonContainer = submitButton.parentNode;
              if (submitButtonContainer) {
                submitButtonContainer.appendChild(submitWarningMessage);
              }
            }
            submitWarningMessage.style.display = 'block';
            console.log('Submit button disabled');
          } else {
            console.log('Submit button not found for disabling');
          }
        } else {
          // Hide warning message
          warningMessage.style.display = 'none';
          
          // Hide submit button warning
          submitWarningMessage.style.display = 'none';
          
          // Re-enable submit button if other option is selected
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.style.opacity = '1';
            submitButton.style.cursor = 'pointer';
            submitButton.title = '';
            console.log('Submit button enabled');
          }
        }
      }
      
      // Listen for changes
      pocTypeField.addEventListener('change', handlePOCTypeChange);
      
      // Also listen for input events in case it's not a select
      pocTypeField.addEventListener('input', handlePOCTypeChange);
      
      // Check initial state
      handlePOCTypeChange();
      
    }, 200);
  }
  
  setupPOCTypeMonitoring();

  

  // === Inject Excalidraw Sketchpad ===
  const sketchField = document.querySelector('.form-field.request_custom_fields_9312873208986');
  if (sketchField) {
    const container = document.createElement('div');
    container.id = 'excalidraw-container';
    container.style.display = 'none';
    container.style.marginTop = '16px';

    const label = document.createElement('label');
    label.textContent = '📝 Include a Sketch';
    label.style.fontWeight = 'bold';
    label.style.display = 'block';
    label.style.marginBottom = '8px';

    const iframe = document.createElement('iframe');
    iframe.width = '100%';
    iframe.height = '700';
    iframe.style.border = '1px solid #ccc';
    iframe.style.borderRadius = '8px';
    iframe.loading = 'lazy';
    iframe.sandbox = 'allow-scripts allow-same-origin allow-downloads allow-forms';
    iframe.src = 'https://excalidraw.com/#url=' + encodeURIComponent(
      'https://raw.githubusercontent.com/Asa240/excalidraw-templates/main/excalidraw_starter_app.json'
    );

    const note = document.createElement('div');
    note.style.marginTop = '12px';
    note.style.padding = '12px';
    note.style.backgroundColor = '#fff8e1';
    note.style.border = '1px solid #ffe082';
    note.style.borderRadius = '6px';
    note.style.fontSize = '16px';
    note.innerHTML = '📸 After drawing your sketch, take a screenshot and upload it as an attachment at the bottom of this form.';

    container.appendChild(label);
    container.appendChild(iframe);
    container.appendChild(note);

    sketchField.appendChild(container);

    const checkbox = document.querySelector('#request_custom_fields_9312873208986');
    if (checkbox) {
      checkbox.addEventListener('change', function () {
        container.style.display = checkbox.checked ? 'block' : 'none';
      });
    }
  }

});



document.addEventListener("DOMContentLoaded", function () {
  function updateOnlyForTargetForm() {
    const targetFormId = '9312830097690';
    const currentFormId = document.querySelector('#request_issue_type_select')?.value;

    // Only apply to the target form
    if (currentFormId !== targetFormId) {
      // Reset visibility if needed (optional fallback safety)
      const subjectWrapper = document.querySelector('.form-field.request_subject');
      if (subjectWrapper) subjectWrapper.style.display = '';

      const descriptionWrapper = document.querySelector('.form-field.request_description');
      if (descriptionWrapper) descriptionWrapper.style.display = '';
      return;
    }

    // Hide Subject
    const subjectWrapper = document.querySelector('.form-field.request_subject');
    if (subjectWrapper) subjectWrapper.style.display = 'none';

    // Hide Description
    const descriptionWrapper = document.querySelector('.form-field.request_description');
    if (descriptionWrapper) descriptionWrapper.style.display = 'none';

    // Set generic message
    const genericMessage = "Thanks for your request! We'll review the details and follow up shortly.";
    const setDescription = () => {
      const editor = window.tinymce?.get('request_description');
      if (editor) {
        editor.setContent(`<p>${genericMessage}</p>`);
        editor.fire('change');
      } else {
        const descField = document.querySelector('#request_description');
        if (descField) {
          descField.value = genericMessage;
          descField.dispatchEvent(new Event('input', { bubbles: true }));
          descField.dispatchEvent(new Event('change', { bubbles: true }));
        }
      }
    };

    setTimeout(setDescription, 200);
    setTimeout(setDescription, 600);
  }

  updateOnlyForTargetForm();

  // Re-run on form switch
  const formSelector = document.querySelector('#request_issue_type_select');
  if (formSelector) {
    formSelector.addEventListener('change', () => setTimeout(updateOnlyForTargetForm, 300));
  }
});










  // === Optional Onboarding Splash ===
document.addEventListener("DOMContentLoaded", function () {
  const isFormPage = window.location.href.includes("/requests/new?ticket_form_id=");

  if (isFormPage && !localStorage.getItem("hideSCRequestOverlay")) {
    const splash = document.createElement("div");
    splash.id = "sc-request-overlay";
    splash.innerHTML = `
      <div class="sc-request-popup">
        <button class="sc-request-close" aria-label="Close message">&times;</button>
        <h2>Hey friend 👋</h2>
        <p>
          Just a heads up — we’ve added a few extra questions to help us scope requests better. 
          The more detail you provide, the faster we can get rolling. Thanks for partnering with us! 🫶
        </p>
        <label class="sc-request-checkbox">
          <input type="checkbox" id="sc-dont-show-again"> Don’t show this again
        </label>
      </div>
    `;
    document.body.appendChild(splash);

    document.querySelector(".sc-request-close").addEventListener("click", function () {
      const dontShow = document.getElementById("sc-dont-show-again").checked;
      if (dontShow) {
        localStorage.setItem("hideSCRequestOverlay", "true");
      }
      splash.remove();
    });
  }
});




