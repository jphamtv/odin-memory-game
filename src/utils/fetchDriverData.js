// fetchDriverData.js

async function fetchDriverData() {
  const API_URL = 'https://api.openf1.org/v1/drivers?&session_key=9492'

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const driverData = await response.json();  
    return driverData;
  } catch (error) {
    console.error('Error fetching driver data', error);
    throw error;
  }
}

function extractDriverData(driverData) {
  const drivers = driverData.map(driver => ({
    name: driver.full_name,
    image: driver.headshot_url.replace('.transform/1col/image.png', ''),
  }));
  return drivers;
}

export async function getDriverData() {
  try {
    const driverData = await fetchDriverData();
    const extractedData = extractDriverData(driverData);
    return extractedData;
  } catch (error) {
    console.error('Error getting driver data', error);
    throw error;
  }
}

getDriverData()
  .then((extractedData) => {
    console.log(extractedData);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
