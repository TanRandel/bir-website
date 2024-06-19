import React from 'react';

const Dropdown = () => {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    const urls = {
      "How can I reschedule for another program briefing?": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8624908064409-How-can-I-reschedule-for-another-program-briefing",
      "How can I change program if I already secured a slot in program briefing?": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8625035126553-How-can-I-change-program-if-I-already-secured-a-slot-in-program-briefing",
      "Where can I find the documentary requirement templates?": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8625056020761-Where-can-I-find-the-documentary-requirement-templates",
      "How can I avail a loan if I am a Small Farmer and Fisherfolk (SFF)?": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8625640377113-How-can-I-avail-a-loan-if-I-am-a-Small-Farmer-and-Fisherfolk-SFF",
      "What are the accepted file formats in uploading documentary requirements": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8625995041049-What-are-the-accepted-file-formats-in-uploading-documentary-requirements",
      "I already attended program briefing. Why do I still have 'incomplete' status": "https://helpdesk.acpc.gov.ph/hc/en-us/articles/8626070666649-I-already-attended-program-briefing-Why-do-I-still-have-an-incomplete-status",
    };

    if (urls[selectedValue]) {
      window.open(urls[selectedValue], '_blank');
    }
  };

  return (
    <select className="dropdown" onChange={handleChange}>
      <option>Frequently Ask Question</option>
      <option>How can I reschedule for another program briefing?</option>
      <option>How can I change program if I already secured a slot in program briefing?</option>
      <option>Where can I find the documentary requirement templates?</option>
      <option>How can I avail a loan if I am a Small Farmer and Fisherfolk (SFF)?</option>
      <option>What are the accepted file formats in uploading documentary requirements</option>
      <option>I already attended program briefing. Why do I still have 'incomplete' status</option>
    </select>
  );
};

export default Dropdown;
