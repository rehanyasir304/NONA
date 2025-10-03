// JS/main.js — load cards from cards.js, render cards, copy/run/expand behaviors
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("examples-container");
    const searchBox = document.getElementById("search");
    const filterBox = document.getElementById("filter");
    const limitBox = document.getElementById("limit");

    // cards are now global from cards.js
    let allCards = window.cards || [];

    // helper: decode HTML entities to raw string
    function decodeEntities(str = "") {
        const txt = document.createElement("textarea");
        txt.innerHTML = str;
        return txt.value;
    }

    // apply filters and render
    function render() {
        if (!container) return;

        const q = (searchBox?.value || "").trim().toLowerCase();
        const lang = (filterBox?.value || "all").toLowerCase();
        const limit = parseInt(limitBox?.value || "10", 10) || 10;

        const filtered = allCards.filter(card => {
            const title = (card.title || "").toLowerCase();
            const brief = (card.brief || card.description || "").toLowerCase();
            const details = (card.details || "").toLowerCase();
            const matchesQ = !q || title.includes(q) || brief.includes(q) || details.includes(q);
            const tags = (card.tags || []).map(t => String(t).toLowerCase());
            const matchesLang = lang === "all" || tags.includes(lang);
            return matchesQ && matchesLang;
        });

        const toShow = filtered.slice(0, limit);
        container.innerHTML = "";

        if (!toShow.length) {
            container.innerHTML = "<p style='padding:12px'>No examples found.</p>";
            return;
        }

        toShow.forEach(card => {
            const article = document.createElement("article");
            article.className = "example-card";

            // Title
            const h2 = document.createElement("h2");
            h2.textContent = card.title || "Untitled";

            // --- CODE BOX ---
            const codeBox = document.createElement("div");
            codeBox.className = "code-box";

            // Copy button
            const copyBtn = document.createElement("button");
            copyBtn.className = "copy-btn";
            copyBtn.type = "button";
            copyBtn.textContent = "Copy";
            codeBox.appendChild(copyBtn);

            // Scrollable code container
            const codeScroll = document.createElement("div");
            codeScroll.className = "code-scroll";

            const pre = document.createElement("pre");
            const codeEl = document.createElement("code");

            // decode so both &lt; and raw < are handled
            const decodedCode = decodeEntities(card.code || "");
            codeEl.textContent = decodedCode;
            pre.appendChild(codeEl);
            codeScroll.appendChild(pre);
            codeBox.appendChild(codeScroll);

            // brief
            const briefP = document.createElement("p");
            briefP.className = "brief";
            briefP.textContent = card.brief || card.description || "";

            // details
            const detailsDiv = document.createElement("div");
            detailsDiv.className = "details";
            detailsDiv.innerHTML = decodeEntities((card.details || "")).replace(/\n/g, "<br>");

            // output wrapper (iframe)
            const outputWrapper = document.createElement("div");
            outputWrapper.className = "output-wrapper";
            const iframe = document.createElement("iframe");
            iframe.className = "output-frame";
            iframe.title = "Code output preview"; // accessibility fix
            outputWrapper.appendChild(iframe);

            // buttons row
            const btnRow = document.createElement("div");
            btnRow.className = "btn-row";

            const runBtn = document.createElement("button");
            runBtn.className = "run-btn";
            runBtn.type = "button";
            runBtn.textContent = "Run";

            const viewBtn = document.createElement("button");
            viewBtn.className = "view-more-btn";
            viewBtn.type = "button";
            viewBtn.textContent = "View More";

            btnRow.appendChild(runBtn);
            btnRow.appendChild(viewBtn);

            // assemble
            article.appendChild(h2);
            article.appendChild(codeBox);
            article.appendChild(briefP);
            article.appendChild(btnRow);
            article.appendChild(detailsDiv);
            article.appendChild(outputWrapper);

            container.appendChild(article);

            // --- behaviors ---
            copyBtn.addEventListener("click", () => {
                navigator.clipboard.writeText(decodedCode).then(() => {
                    copyBtn.textContent = "Copied!";
                    setTimeout(() => (copyBtn.textContent = "Copy"), 1400);
                }).catch(() => {
                    console.error("Copy failed. Please select and use Ctrl+C.");
                });
            });

            runBtn.addEventListener("click", () => {
                const showing = outputWrapper.style.display === "block";
                if (!showing) {
                    outputWrapper.style.display = "block";
                    iframe.srcdoc = decodedCode;
                    runBtn.textContent = "Hide Output";
                    article.classList.add("expanded");
                    viewBtn.textContent = "View Less";

                    // collapse others
                    document.querySelectorAll(".example-card.expanded").forEach(c => {
                        if (c !== article) {
                            c.classList.remove("expanded");
                            const vb = c.querySelector(".view-more-btn");
                            if (vb) vb.textContent = "View More";
                            const ob = c.querySelector(".output-wrapper");
                            if (ob) ob.style.display = "none";
                            const rb = c.querySelector(".run-btn");
                            if (rb) rb.textContent = "Run";
                        }
                    });

                    setTimeout(() => article.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
                } else {
                    outputWrapper.style.display = "none";
                    runBtn.textContent = "Run";
                }
            });

            viewBtn.addEventListener("click", () => {
                const isOpen = article.classList.contains("expanded");
                // close others
                document.querySelectorAll(".example-card.expanded").forEach(c => {
                    c.classList.remove("expanded");
                    const vb = c.querySelector(".view-more-btn");
                    if (vb) vb.textContent = "View More";
                    const ob = c.querySelector(".output-wrapper");
                    if (ob) ob.style.display = "none";
                    const rb = c.querySelector(".run-btn");
                    if (rb) rb.textContent = "Run";
                });

                if (!isOpen) {
                    article.classList.add("expanded");
                    viewBtn.textContent = "View Less";
                    setTimeout(() => article.scrollIntoView({ behavior: "smooth", block: "start" }), 60);
                } else {
                    article.classList.remove("expanded");
                    viewBtn.textContent = "View More";
                }
            });
        });
    }

    // wire controls
    [searchBox, filterBox, limitBox].forEach(el => {
        if (!el) return;
        el.addEventListener("input", render);
        el.addEventListener("change", render);
    });

    render();
});
