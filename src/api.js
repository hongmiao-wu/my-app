export const sendParamsToBackend = async (seedValue, epochValue, batchValue, rateValue) => {
    const payload = {
      seedValue: seedValue,
      epochValue: epochValue,
      batchValue: batchValue,
      rateValue: rateValue,
    };
    console.log(payload);
  
    try {
      const response = await fetch('http://localhost:5001/api/get_params', {
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
  