const protocolIdentifier = "https://www.";
const az = "aargauerzeitung";
const bz = "bzbasel";
const sz = "solothurnerzeitung";
const liz = "limmattalerzeitung"
const countryCode = ".ch/";

//get preview URL and split it
let previewURL = location.href;
const splitted = previewURL.split("preview-aaz.azprod.lovelysystems.com/")
const splitted2 = splitted[1].split("/");
let full_url;

//identify CH-Media-Region and build valid URL
if (splitted2[0] === "basel") {
  full_url = protocolIdentifier.concat(bz, countryCode, splitted[splitted.length-1]);
} else if (splitted2[0] === "solothurn") {
  full_url = protocolIdentifier.concat(sz, countryCode, splitted[splitted.length-1]);
} else if (splitted2[0] === "limmattal") {
  full_url = protocolIdentifier.concat(liz, countryCode, splitted[splitted.length-1]);
} else {
  full_url = protocolIdentifier.concat(az, countryCode, splitted[splitted.length-1]);
};

//copy to clipboard
if (full_url.startsWith("https://www.aargauerzeitung.ch") ||
    full_url.startsWith("https://www.bzbasel.ch") ||
    full_url.startsWith("https://www.solothurnerzeitung.ch") ||
    full_url.startsWith("https://www.limmattalerzeitung.ch"))
    {
    navigator.clipboard.writeText(full_url).then(function() {
        console.log("URL erfolgreich ins Clipboard kopiert.");
      }, function() {
        console.log("URL nicht ins Clipboard kopiert.");
      })
} else {
    console.log("URL nicht ins Clipboard kopiert: URL nicht gültig.");
};