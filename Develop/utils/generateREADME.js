
function renderLicenseBadge(licenseType) {
  let licenseString = " ";
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "APACHE") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
  };
  if (licenseType === "GPL") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
  if (licenseType === "BSD") {
    licenseString = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
  };
  return licenseString;
}


function renderLicenseLink(licenseType) {
  let licenseLink = " ";
  if (licenseType === "MIT") {
    licenseLink = `https://opensource.org/licenses/MIT`
  };
  if (licenseType === "APACHE") {
    licenseLink = `https://opensource.org/licenses/Apache-2.0`
  };
  if (licenseType === "GPL") {
    licenseLink = `https://www.gnu.org/licenses/gpl-3.0`
  };
  if (licenseType === "BSD") {
    licenseLink = `https://opensource.org/licenses/BSD-3-Clause`
  };
  return licenseLink;  
}


function generateREADME(data) {
  return `# ${data.project} ${renderLicenseBadge(data.license)}
  ## ${ "Table of Contents" }
  1. [Description](#description)

  ## Description
  ${data.description}

  ## License
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateREADME;