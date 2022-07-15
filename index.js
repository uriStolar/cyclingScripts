const yargs = require('yargs');

const formatFloat = number => number.toFixed(0);

const argv = yargs
  .command('zones', 'Shows estimated power zones based on FTP %', {
    ftp: {
      description: 'FTP to calculate power zones',
      alias: 'ftp',
      type: 'number'
    }
  })
  // .option('time', {
  //   alias: 't',
  //   description: 'Tell the present Time',
  //   type: 'boolean'
  // })
  .help()
  .alias('help', 'h').argv;

// if (argv.time) {
//   console.log('The current time is: ', new Date().toLocaleTimeString());
// }

if (argv._.includes('zones')) {
  const ftp = argv.ftp || 237;
  
  console.log(`Estimated power zones based on a FTP of ${ftp} Watts:
  
Training Zone       Power (Watts)            FTP Range

Active Recovery	    0 - ${formatFloat(ftp * 0.55)} W          < 55% FTP	         
Endurance	    ${formatFloat(ftp * 0.56)} W - ${formatFloat(ftp * 0.75)} W      55% – 75% FTP	 
Tempo	            ${formatFloat(ftp * 0.76)} W - ${formatFloat(ftp * 0.87)} W      76% – 87% FTP  
Sweet Spot	    ${formatFloat(ftp * 0.88)} W - ${formatFloat(ftp * 0.94)} W      88% – 94% FTP	 
Threshold	    ${formatFloat(ftp * 0.95)} W - ${formatFloat(ftp * 1.05)} W      95% – 105% FTP 
VO2 Max	            ${formatFloat(ftp * 1.06)} W - ${formatFloat(ftp * 1.2)} W      106% – 120% FTP
Anaerobic	    ${formatFloat(ftp * 1.2)}+ W             > 120% FTP

Aerobic Treshold / Lactate Treshold 1
aka Peter Attia MD's definition of "Z2"
aka "keeping it under 2 mmol/L":
${formatFloat(ftp * 0.76)} W - ${formatFloat(ftp * 0.79)} W      76% – 79% FTP  
`);
}