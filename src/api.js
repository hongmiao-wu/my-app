export const sendParamsToBackend = async (seedValue, epochValue, batchValue, rateValue) => {
    const payload = {
      seedValue: seedValue,
      epochValue: epochValue,
      batchValue: batchValue,
      rateValue: rateValue,
    };
  
    try {
      const response = await fetch('http://localhost:5000/process_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
  
      const responseData = await response.json();
      console.log('Response from backend:', responseData);
    } catch (error) {
      console.error('Error sending params to backend:', error);
    }
  };
  