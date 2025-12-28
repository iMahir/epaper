"use strict";

// -------------------------
// Newspapers Configuration
// -------------------------
const newspapers = [
  {
    "name": "The Times of India",
    "language": "English",
    "homepage": "https://timesofindia.indiatimes.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/The_times_of_india.svg/1920px-The_times_of_india.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/the-times-of-india-epaper-pdf-download/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/times-of-india" }
    ]
  },
  {
    "name": "The Hindu",
    "language": "English",
    "homepage": "https://www.thehindu.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Hindu_logo.svg/1920px-The_Hindu_logo.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/the-hindu-analysis-today-pdf-download/" }
    ]
  },
  {
    "name": "The New Indian Express",
    "language": "English",
    "homepage": "https://www.newindianexpress.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/TNIE_Masthead_2016.svg/1920px-TNIE_Masthead_2016.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/download-today-the-new-indian-express-newspaper/" }
    ]
  },
  {
    "name": "The Telegraph",
    "language": "English",
    "homepage": "https://www.telegraphindia.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/The_Telegraph_%28Calcutta%29_Logo.svg/1920px-The_Telegraph_%28Calcutta%29_Logo.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/the-telegraph-epaper-today-pdf-download/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/telegraph-newspaper/" }
    ]
  },
  {
    "name": "The Economic Times",
    "language": "English",
    "homepage": "https://economictimes.indiatimes.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/The_Economic_Times_logo.svg/1920px-The_Economic_Times_logo.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/download-the-economic-times-pdf-newspaper-free/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/economic-times" }
    ]
  },
  {
    "name": "The Tribune",
    "language": "English",
    "homepage": "https://www.tribuneindia.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/02/The_Tribune_logo.jpg",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/the-tribune-epaper-pdf-download-daily/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/the-tribune" }
    ]
  },
  {
    "name": "The Statesman",
    "language": "English",
    "homepage": "https://www.thestatesman.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/TheStatesman.svg/1920px-TheStatesman.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/the-statesman-newspaper-today-pdf-download/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/statesman-newspaper" }
    ]
  },
  {
    "name": "Business Standard",
    "language": "English",
    "homepage": "https://www.business-standard.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/2e/Business_Standard_logo.jpg",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/business-standard-epaper-pdf-free-download/" }
    ]
  },
  {
    "name": "Financial Express",
    "language": "English",
    "homepage": "https://www.financialexpress.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/en/thumb/0/07/The_Financial_Express_%28India%29_Logo.svg/1920px-The_Financial_Express_%28India%29_Logo.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/financial-express-epaper-today-pdf-download/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/financial-express-newspaper/" }
    ]
  },
  {
    "name": "Free Press Journal",
    "language": "English",
    "homepage": "https://www.freepressjournal.in/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/FPJ_Masthead_logo_Oct_2021.png/1920px-FPJ_Masthead_logo_Oct_2021.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/free-press-journal-epaper/" },
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/the-free-press-journal" }
    ]
  },
  {
    "name": "Mint",
    "language": "English",
    "homepage": "https://www.livemint.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mint_%28newspaper%29_logo.svg/1920px-Mint_%28newspaper%29_logo.svg.png",
    "links": [
      { "source": "epaperwave", "url": "https://epaperwave.com/download-the-mint-epaper-pdf-for-free-today/" }
    ]
  },
  {
    "name": "The Asian Age",
    "language": "English",
    "homepage": "https://www.asianage.com/",
    "logo": "https://www.asianage.com/images/logo.png?v=1",
    "links": [
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/the-asian-age-epaper/" }
    ]
  },
  {
    "name": "Deccan Chronicle",
    "language": "English",
    "homepage": "https://www.deccanchronicle.com/",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Deccan_Chronicle_Logo.png",
    "links": [
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/deccan-chronicle-epaper/" }
    ]
  },
  {
    "name": "The Pioneer",
    "language": "English",
    "homepage": "https://www.dailypioneer.com/",
    "logo": "https://www.dailypioneer.com/images/new-logo.png",
    "links": [
      { "source": "dailyepaper", "url": "https://www.dailyepaper.in/pioneer-epaper/" }
    ]
  }
];

// -------------------------
// Utility: Fetch with Timeout & CORS Proxy
// -------------------------
async function fetchWithTimeout(url, options = {}, timeout = 1000 * 60 * 2) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

// Configuration
const PDF_CACHE_DURATION = 3600; // 1 hour in seconds (adjust based on update frequency)
const API_CACHE_DURATION = 300;  // 5 minutes in seconds

// Cache for transformed Google Drive links (in-memory for worker lifetime)
const linkCache = new Map();

async function fetchWithCors(url, options = {}) {
  let response;
  try {
    response = await fetchWithTimeout(url, options);
  } catch (err) {
    console.error("Error during normal fetch:", err);
  }
  if (!response || response.status === 403) {
    const proxyUrl = "https://api.codetabs.com/v1/proxy?quest=" + encodeURIComponent(url);
    try {
      response = await fetchWithTimeout(proxyUrl, options);
    } catch (err) {
      console.error("Error fetching via proxy:", err);
      throw err;
    }
  }
  return response;
}

// -------------------------
// Helper Functions
// -------------------------
function parseDateString(dateStr) {
  if (!/[a-zA-Z]/.test(dateStr)) {
    const parts = dateStr.split(/[-\s]+/);
    if (parts.length === 3) {
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);
      return new Date(year, month - 1, day);
    }
  }
  return new Date(dateStr);
}

function getRelativeDate(date) {
  const now = new Date();
  const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diffDays === 0) return "Today";
  else if (diffDays === 1) return "Yesterday";
  else return diffDays + " days ago";
}

function formatDateDDMMYYYY(date) {
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

// Regex pattern strings (create new instances for each use to avoid concurrency issues)
// Updated patterns to be more flexible and handle website structure changes
const REGEX_PATTERNS = {
  // Updated: handles both <b> and <strong>, doesn't require /view in URL, more flexible with whitespace
  epaperwave: /<(?:b|strong)[^>]*>\s*([\d]{1,2}[-\s]\w+[-\s]\d{4})[^<]*:\s*<a[^>]+href=["']([^"']*drive\.google\.com\/file\/d\/[^"'\/]+)[^"']*["'][^>]*>[^<]*<\/a>\s*<\/(?:b|strong)>/gi,
  
  // Updated: handles "Download Now", "Download", "Click Here" variations, doesn't require /view
  dailyepaperStandard: /<p[^>]*>\s*<span[^>]*>\s*([\d]{1,2}\s+\w+\s+\d{4})[^<]*:\s*<a[^>]+href=["']([^"']*drive\.google\.com\/file\/d\/[^"'\/]+)[^"']*["'][^>]*>(?:Download|Click)[^<]*<\/a>/gi,
  
  // Updated: captures the actual Google Drive link for dual-language papers
  dailyepaperDual: /<p[^>]*>\s*<span[^>]*>\s*([\d]{1,2}\s+\w+\s+\d{4})[^<]*:.*?<a[^>]+href=["']([^"']*drive\.google\.com\/file\/d\/[^"'\/]+)[^"']*["'][^>]*>English<\/a>/gi,
  
  // New: fallback pattern for table-based layouts
  epaperwave_table: /<t[dr][^>]*>\s*(?:<[^>]+>)*\s*([\d]{1,2}[-\s]\w+[-\s]\d{4})[^<]*:\s*<a[^>]+href=["']([^"']*drive\.google\.com\/file\/d\/[^"'\/]+)[^"']*["'][^>]*>[^<]*<\/a>/gi
};

// Helper function to create fresh regex instances (avoids concurrency issues in Workers)
function getRegex(patternName) {
  const pattern = REGEX_PATTERNS[patternName];
  return new RegExp(pattern.source, pattern.flags);
}

async function getLatestDateForPaper(paper) {
  let paperDates = [];
  
  // Fetch all sources in parallel for better performance
  const fetchPromises = paper.links.map(async (linkInfo) => {
    try {
      const resp = await fetchWithCors(linkInfo.url);
      const html = await resp.text();
      const dates = [];
      
      if (linkInfo.source === "epaperwave") {
        // Try standard pattern first
        const regex = getRegex('epaperwave');
        let match;
        while ((match = regex.exec(html)) !== null) {
          const dateObj = parseDateString(match[1].trim());
          if (!isNaN(dateObj.getTime()) && dateObj.getDay() !== 0) {
            dates.push(dateObj);
          }
        }
        // If no matches, try table-based pattern as fallback
        if (dates.length === 0) {
          const regexTable = getRegex('epaperwave_table');
          while ((match = regexTable.exec(html)) !== null) {
            const dateObj = parseDateString(match[1].trim());
            if (!isNaN(dateObj.getTime()) && dateObj.getDay() !== 0) {
              dates.push(dateObj);
            }
          }
        }
      } else if (linkInfo.source === "dailyepaper") {
        const regexStandard = getRegex('dailyepaperStandard');
        let match, foundMatch = false;
        while ((match = regexStandard.exec(html)) !== null) {
          const dateObj = new Date(match[1].trim());
          if (!isNaN(dateObj)) {
            dates.push(dateObj);
            foundMatch = true;
          }
        }
        if (!foundMatch) {
          const regexDual = getRegex('dailyepaperDual');
          while ((match = regexDual.exec(html)) !== null) {
            const dateObj = new Date(match[1].trim());
            if (!isNaN(dateObj)) {
              dates.push(dateObj);
            }
          }
        }
      }
      return dates;
    } catch (err) {
      console.error(`Error fetching ${linkInfo.source} for ${paper.name}:`, err);
      return [];
    }
  });
  
  const results = await Promise.all(fetchPromises);
  paperDates = results.flat();
  
  if (paperDates.length === 0) return "Unknown";
  paperDates.sort((a, b) => b - a);
  return paperDates[0];
}

function transformGoogleDriveLink(viewLink) {
  // Check cache first
  if (linkCache.has(viewLink)) {
    return linkCache.get(viewLink);
  }
  
  let result;
  // Try to extract file ID from various Google Drive URL formats
  // Format 1: /file/d/{fileId}/view
  let match = viewLink.match(/\/file\/d\/([^/?]+)(?:\/view)?/);
  if (match) {
    result = `https://drive.google.com/uc?export=download&id=${match[1]}&authuser=0`;
  } else if (viewLink.includes('drive.google.com/file/d/')) {
    // Format 2: Already contains file/d/ but might be partial URL
    // Extract everything after file/d/ up to the next / or end of string
    const parts = viewLink.split('/file/d/')[1];
    const fileId = parts ? parts.split(/[/?]/)[0] : null;
    if (fileId) {
      result = `https://drive.google.com/uc?export=download&id=${fileId}&authuser=0`;
    } else {
      result = viewLink;
    }
  } else {
    result = viewLink;
  }
  
  // Cache the result
  linkCache.set(viewLink, result);
  return result;
}

// -------------------------
// (Removed CSP Headers as per request)
// -------------------------
function addSecurityHeaders(headers) {
  // For now, we are not setting CSP.
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.set("Referrer-Policy", "no-referrer");
  return headers;
}

// -------------------------
// Route Handlers
// -------------------------
async function handleHomepage(request, host) {
  const groups = {};
  newspapers.forEach((paper) => {
    if (!groups[paper.language]) groups[paper.language] = [];
    groups[paper.language].push(paper);
  });
  let groupsHtml = "";
  for (const lang in groups) {
    const cardsHtml = groups[lang]
      .map((paper) => {
        const paperCode = paper.name.replace(/\s+/g, "-");
        return `
          <div class="card" data-paper-code="${paperCode}" onclick="window.location.href='${host}/reader/${paperCode}'">
            <img src="${paper.logo}" alt="${paper.name} Logo">
            <div class="card-body">
              <h3>${paper.name}</h3>
              <p class="date">Fetching data...</p>
            </div>
            <div class="card-footer">
              <a href="${host}/download/${paperCode}" onclick="event.stopPropagation();">Download</a>
            </div>
          </div>
        `;
      })
      .join("");
    groupsHtml += `
      <div class="group">
        <h2 class="language-title">${lang}</h2>
        <div class="grid">
          ${cardsHtml}
        </div>
      </div>
    `;
  }
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>E-Paper Collection</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Preconnect to external resources for faster loading -->
  <link rel="preconnect" href="https://epaperwave.com">
  <link rel="preconnect" href="https://www.dailyepaper.in">
  <link rel="dns-prefetch" href="https://epaperwave.com">
  <link rel="dns-prefetch" href="https://www.dailyepaper.in">
  <style>
    /* Reset & Base */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Open Sans', sans-serif; background: #111; color: #eee; }
    a { text-decoration: none; color: inherit; }
    .container { width: 100%; max-width: 1200px; margin: 0 auto; padding: 20px; min-height: 100vh; }
    header { background: linear-gradient(135deg, #000, #222); padding: 40px 20px; text-align: center; animation: fadeIn 1s ease-out; }
    header h1 { font-size: 3rem; letter-spacing: 2px; margin-bottom: 10px; }
    header p { font-size: 1.2rem; color: #aaa; }
    .group { margin: 40px 0; }
    .language-title { font-size: 2rem; margin-bottom: 20px; text-align: center; border-bottom: 2px solid #444; display: inline-block; padding-bottom: 10px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 20px; }
    .card { background: #222; border-radius: 8px; overflow: hidden; cursor: pointer; box-shadow: 0 4px 8px rgba(0,0,0,0.7); transition: transform 0.3s, box-shadow 0.3s; display: flex; flex-direction: column; height: 100%; }
    .card:hover { transform: translateY(-5px); }
    .card img { width: 100%; height: 100px; object-fit: contain; padding: 10px; background: #fff; }
    .card-body { padding: 15px; flex: 1; }
    .card-body h3 { font-size: 1.5rem; margin-bottom: 10px; color: #fff; }
    .card-body .date { font-size: 0.9rem; color: #bbb; }
    .card-footer { text-align: right; padding: 10px 15px; background: #1a1a1a; }
    .card-footer a {
      background: linear-gradient(45deg, #2563eb, #1a4fbd);
      color: #fff;
      padding: 8px 12px;
      text-decoration: none;
      border-radius: 4px;
      font-size: 0.9rem;
      transition: background 0.3s;
    }
    
    .card-footer a:hover {
      background: linear-gradient(45deg, #1a4fbd, #2563eb);
    }
    .card.unavailable { background: #555; opacity: 0.6; cursor: default; }
    footer { text-align: center; padding: 20px; border-top: 1px solid #333; margin-top: 40px; animation: fadeIn 1s ease-out; }
    footer a { color: #2563eb; transition: color 0.3s; }
    footer a:hover { color: #1a4fbd; }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 768px) { header h1 { font-size: 2.5rem; } .card-body h3 { font-size: 1.3rem; } }
  </style>
</head>
<body>
  <header>
    <h1>E-Paper Collection</h1>
    <p>Modern digital newspaper library</p>
  </header>
  <div class="container">
    ${groupsHtml}
  </div>
  <footer>
    <p>View project on <a href="https://github.com/iMahir/epaper" target="_blank">GitHub</a></p>
  </footer>
  <script>
    document.addEventListener("DOMContentLoaded", async function () {
      const cards = document.querySelectorAll('.card');
      const paperCodes = Array.from(cards).map(card => card.dataset.paperCode);
      
      // Fetch all newspaper dates in a single batch request for better performance
      try {
        const response = await fetch('/api/latest-batch', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ papers: paperCodes })
        });
        const results = await response.json();
        
        cards.forEach(card => {
          const paperCode = card.dataset.paperCode;
          const dateElem = card.querySelector('.date');
          const data = results[paperCode];
          
          if (data && data.latestDate !== "Unknown") {
            dateElem.textContent = data.latestDate;
          } else {
            dateElem.textContent = "Unavailable";
            card.classList.add('unavailable');
            card.style.pointerEvents = "none";
          }
        });
      } catch (err) {
        console.error('Error fetching dates:', err);
        // Fallback to individual requests if batch fails
        const batchSize = 5;
        const queue = Array.from(cards);
        
        async function fetchNextBatch() {
          const batch = queue.splice(0, batchSize);
          if (!batch.length) return;
          await Promise.all(batch.map(async card => {
            const paperCode = card.dataset.paperCode;
            try {
              const response = await fetch(\`/api/latest/\${paperCode}\`);
              const data = await response.json();
              const dateElem = card.querySelector('.date');
              if (data.latestDate === "Unknown") {
                dateElem.textContent = "Unavailable";
                card.classList.add('unavailable');
                card.style.pointerEvents = "none";
              } else {
                dateElem.textContent = data.latestDate;
              }
            } catch (err) {
              console.error(err);
              const dateElem = card.querySelector('.date');
              dateElem.textContent = "Unavailable";
              card.classList.add('unavailable');
              card.style.pointerEvents = "none";
            }
          }));
          if (queue.length) { 
            await new Promise(resolve => setTimeout(resolve, 500)); 
            await fetchNextBatch(); 
          }
        }
        await fetchNextBatch();
      }
    });
  </script>
</body>
</html>
  `;
  const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });
  addSecurityHeaders(headers);
  return new Response(html, { headers });
}

async function handleReader(request, host, paperCode) {
  const paper = newspapers.find((p) =>
    p.name.replace(/\s+/g, "-").toLowerCase() === paperCode.toLowerCase()
  );
  if (!paper) return new Response("Newspaper not found", { status: 404 });
  const pdfEndpoint = `${host}/download/${paperCode}`;
  const htmlResponse = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${paper.name} - Reader</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- Preconnect to CDN for faster resource loading -->
  <link rel="preconnect" href="https://cdnjs.cloudflare.com">
  <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
  <link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js" as="script">
  <style>
    body { margin: 0; font-family: 'Open Sans', sans-serif; background: #111; color: #eee; overflow-x: hidden; }
    #viewerContainer { max-width: 100%; margin: 0 auto; background: #1e1e1e; position: relative; min-height: 100vh; padding: 10px; }
    #globalSpinner { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 5px solid #444; border-top: 5px solid #eee; border-radius: 50%; width: 40px; height: 40px; animation: spin 1s linear infinite; z-index: 100; }
    @keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
    #pagesContainer { margin-top: 10px; }
    .page { margin: 10px 0; background: #000; position: relative; min-height: 200px; }
    .page canvas { display: block; width: 100%; height: auto; }
    .page .spinner { position: absolute; top: 50%; left: 50%; width: 30px; height: 30px; margin: -15px 0 0 -15px; border: 4px solid #444; border-top: 4px solid #eee; border-radius: 50%; animation: spin 1s linear infinite; }
    @media (max-width: 768px) { #viewerContainer { padding: 5px; } .page { margin: 5px 0; } }
  </style>
</head>
<body>
  <div id="viewerContainer">
    <div id="globalSpinner"></div>
    <div id="pagesContainer"></div>
  </div>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js"></script>
  <script>
    const pdfUrl = "${pdfEndpoint}";
    let pdfDoc = null;
    const viewerContainer = document.getElementById("viewerContainer");
    const pagesContainer = document.getElementById("pagesContainer");
    const globalSpinner = document.getElementById("globalSpinner");
    
    // Configure PDF.js for progressive loading with range requests
    // disableAutoFetch: true - prevents downloading entire PDF upfront
    // disableStream: false - enables streaming/range requests for better performance
    const loadingTask = pdfjsLib.getDocument({ 
      url: pdfUrl, 
      disableAutoFetch: true, 
      disableStream: false 
    });
    
    loadingTask.promise.then(function(pdf) {
      pdfDoc = pdf;
      globalSpinner.style.display = "none";
      
      // Create placeholders for all pages
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const pageDiv = document.createElement("div");
        pageDiv.id = "page-" + pageNum;
        pageDiv.className = "page";
        pageDiv.innerHTML = "<div class='spinner'></div>";
        pagesContainer.appendChild(pageDiv);
      }
      setupLazyLoading();
    }).catch(function(err) {
      viewerContainer.innerHTML = "<h2>Error loading PDF: " + err.message + "</h2>";
    });
    
    function renderPage(pageNum, container) {
      pdfDoc.getPage(pageNum).then(function(page) {
        const viewport = page.getViewport({ scale: 1 });
        const containerWidth = container.clientWidth;
        const scale = containerWidth / viewport.width;
        const outputScale = window.devicePixelRatio || 1;
        const scaledViewport = page.getViewport({ scale });
        const canvasWidth = scaledViewport.width * outputScale;
        const canvasHeight = scaledViewport.height * outputScale;
        let canvas = document.createElement("canvas");
        let context = canvas.getContext("2d");
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.width = scaledViewport.width + "px";
        canvas.style.height = scaledViewport.height + "px";
        context.scale(outputScale, outputScale);
        page.render({ canvasContext: context, viewport: page.getViewport({ scale: scale }) })
          .promise.then(function() {
            container.innerHTML = "";
            container.appendChild(canvas);
          });
      });
    }
    
    function setupLazyLoading() {
      if (!("IntersectionObserver" in window)) {
        // Fallback: render all pages for older browsers
        document.querySelectorAll(".page").forEach(function(page) {
          const pageNum = parseInt(page.id.split("-")[1], 10);
          renderPage(pageNum, page);
        });
        return;
      }
      
      // Improved lazy loading with better threshold and rootMargin for preloading
      const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            const pageDiv = entry.target;
            const pageNum = parseInt(pageDiv.id.split("-")[1], 10);
            renderPage(pageNum, pageDiv);
            observer.unobserve(pageDiv);
          }
        });
      }, { 
        threshold: 0.01,
        rootMargin: "200px" // Preload pages 200px before they enter viewport
      });
      
      document.querySelectorAll(".page").forEach(function(page) {
        observer.observe(page);
      });
    }
  </script>
</body>
</html>
  `;
  const headers = new Headers({ "Content-Type": "text/html; charset=utf-8" });
  addSecurityHeaders(headers);
  return new Response(htmlResponse, { headers });
}

async function handleDownload(request, host, paperCode) {
  const paper = newspapers.find((p) =>
    p.name.replace(/\s+/g, "-").toLowerCase() === paperCode.toLowerCase()
  );
  if (!paper) return new Response("Newspaper not found", { status: 404 });
  
  // Check cache first for better performance
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);
  let cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) {
    return cachedResponse;
  }
  
  let allLinks = [];
  
  // Fetch all sources in parallel for better performance
  const fetchPromises = paper.links.map(async (linkInfo) => {
    try {
      const sourceResp = await fetchWithCors(linkInfo.url);
      const html = await sourceResp.text();
      const links = [];
      
      if (linkInfo.source === "epaperwave") {
        // Try standard pattern first
        const regex = getRegex('epaperwave');
        let match;
        while ((match = regex.exec(html)) !== null) {
          const dateObj = parseDateString(match[1].trim());
          if (!isNaN(dateObj.getTime()) && dateObj.getDay() !== 0) {
            links.push({ date: dateObj, driveViewLink: match[2].trim(), source: linkInfo.source });
          }
        }
        // If no matches, try table-based pattern as fallback
        if (links.length === 0) {
          const regexTable = getRegex('epaperwave_table');
          while ((match = regexTable.exec(html)) !== null) {
            const dateObj = parseDateString(match[1].trim());
            if (!isNaN(dateObj.getTime()) && dateObj.getDay() !== 0) {
              links.push({ date: dateObj, driveViewLink: match[2].trim(), source: linkInfo.source });
            }
          }
        }
      } else if (linkInfo.source === "dailyepaper") {
        const regexStandard = getRegex('dailyepaperStandard');
        let foundMatch = false, match;
        while ((match = regexStandard.exec(html)) !== null) {
          links.push({ date: new Date(match[1].trim()), driveViewLink: match[2].trim(), source: linkInfo.source });
          foundMatch = true;
        }
        if (!foundMatch) {
          const regexDual = getRegex('dailyepaperDual');
          while ((match = regexDual.exec(html)) !== null) {
            links.push({ date: new Date(match[1].trim()), driveViewLink: match[2].trim(), source: linkInfo.source });
          }
        }
      }
      return links;
    } catch (err) {
      console.error(`Error fetching ${linkInfo.source}:`, err);
      return [];
    }
  });
  
  const results = await Promise.all(fetchPromises);
  allLinks = results.flat();
  
  if (allLinks.length === 0) return new Response("No Google Drive links found", { status: 404 });
  allLinks.sort((a, b) => b.date - a.date);
  const latest = allLinks[0];
  const downloadLink = transformGoogleDriveLink(latest.driveViewLink);
  
  if (new URL(request.url).searchParams.get("directdl") === "true") {
    return Response.redirect(downloadLink, 302);
  }
  
  try {
    const pdfResp = await fetchWithCors(downloadLink);
    if (!pdfResp.ok) return new Response("Error downloading PDF", { status: 502 });
    
    // Stream the response for better performance and lower memory usage
    const headers = new Headers({ 
      "Content-Type": "application/pdf",
      "Cache-Control": `public, max-age=${PDF_CACHE_DURATION}`,
      "Accept-Ranges": "bytes"
    });
    
    // Copy content-length if available for better streaming
    const contentLength = pdfResp.headers.get("content-length");
    if (contentLength) {
      headers.set("Content-Length", contentLength);
    }
    
    addSecurityHeaders(headers);
    const response = new Response(pdfResp.body, { headers });
    
    // Cache the response for future requests
    await cache.put(cacheKey, response.clone());
    
    return response;
  } catch (err) {
    return new Response("Error fetching PDF: " + err.toString(), { status: 500 });
  }
}

async function handleApiLatest(request, paperCode) {
  const paper = newspapers.find((p) =>
    p.name.replace(/\s+/g, "-").toLowerCase() === paperCode.toLowerCase()
  );
  if (!paper) {
    return new Response(JSON.stringify({ error: "Newspaper not found" }), {
      status: 404,
      headers: new Headers({ "Content-Type": "application/json" })
    });
  }
  const latestDate = await getLatestDateForPaper(paper);
  let dateText = "Unknown";
  if (latestDate instanceof Date && !isNaN(latestDate.getTime())) {
    dateText = `${getRelativeDate(latestDate)} – ${formatDateDDMMYYYY(latestDate)}`;
  }
  const headers = new Headers({ "Content-Type": "application/json" });
  const cache = caches.default;
  const cacheKey = new Request(request.url, request);
  const cachedResponse = await cache.match(cacheKey);
  if (cachedResponse) return cachedResponse;
  const apiResponse = new Response(JSON.stringify({ latestDate: dateText }), { headers });
  apiResponse.headers.append("Cache-Control", `public, max-age=${API_CACHE_DURATION}`);
  await cache.put(cacheKey, apiResponse.clone());
  return apiResponse;
}

// Batch API endpoint to fetch multiple newspaper dates in one request
async function handleApiLatestBatch(request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: new Headers({ "Content-Type": "application/json" })
    });
  }
  
  try {
    const body = await request.json();
    const paperCodes = body.papers || [];
    
    if (!Array.isArray(paperCodes) || paperCodes.length === 0) {
      return new Response(JSON.stringify({ error: "Invalid request body" }), {
        status: 400,
        headers: new Headers({ "Content-Type": "application/json" })
      });
    }
    
    // Process all papers in parallel for maximum performance
    const results = await Promise.all(
      paperCodes.map(async (paperCode) => {
        const paper = newspapers.find((p) =>
          p.name.replace(/\s+/g, "-").toLowerCase() === paperCode.toLowerCase()
        );
        
        if (!paper) {
          return [paperCode, { latestDate: "Unknown" }];
        }
        
        try {
          const latestDate = await getLatestDateForPaper(paper);
          let dateText = "Unknown";
          if (latestDate instanceof Date && !isNaN(latestDate.getTime())) {
            dateText = `${getRelativeDate(latestDate)} – ${formatDateDDMMYYYY(latestDate)}`;
          }
          return [paperCode, { latestDate: dateText }];
        } catch (err) {
          console.error(`Error fetching date for ${paperCode}:`, err);
          return [paperCode, { latestDate: "Unknown" }];
        }
      })
    );
    
    const resultObj = Object.fromEntries(results);
    const headers = new Headers({ 
      "Content-Type": "application/json",
      "Cache-Control": `public, max-age=${API_CACHE_DURATION}`
    });
    
    return new Response(JSON.stringify(resultObj), { headers });
  } catch (err) {
    console.error("Error in batch API:", err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: new Headers({ "Content-Type": "application/json" })
    });
  }
}

// -------------------------
// Main Request Handler
// -------------------------
addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  const host = url.origin;
  try {
    if (pathname === "/" || pathname === "/home") {
      return await handleHomepage(request, host);
    } else if (pathname.startsWith("/reader/")) {
      const paperCode = pathname.split("/")[2];
      return await handleReader(request, host, paperCode);
    } else if (pathname.startsWith("/download/")) {
      const paperCode = pathname.split("/")[2];
      return await handleDownload(request, host, paperCode);
    } else if (pathname === "/api/latest-batch") {
      return await handleApiLatestBatch(request);
    } else if (pathname.startsWith("/api/latest/")) {
      const paperCode = pathname.split("/").pop();
      return await handleApiLatest(request, paperCode);
    } else {
      return new Response("Not Found", { status: 404 });
    }
  } catch (err) {
    console.error("Unhandled error:", err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
