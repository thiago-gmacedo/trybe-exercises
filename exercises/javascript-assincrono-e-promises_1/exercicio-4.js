const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo
sendMarsTemperature = (messageDelay, callback) => {
	let nowTemperature = callback();
	setTimeout(() => {console.log(`Mars temperature is: ${nowTemperature} degree Celsius`); }, messageDelay())
};

sendMarsTemperature(messageDelay, getMarsTemperature); // imprime "Mars temperature is: 20 degree Celsius", por exemplo