class HistoryView {
    constructor() {
        this.historyService = new HistoryService();
    }

    getHistoryTimelineDetailTemplate(detailHistory) {
        return `
            <li class="timeline-item">
                <div class="timeline-panel">
                    <h4 class="timeline-title">${detailHistory.title}</h4>
                    <div class="timeline-date">${detailHistory.date}</div>
                    <p class="timeline-description">
                        ${detailHistory.description}
                    </p>
                </div>
            </li>
        `;
    }

    getHistoryTimelineTemplate(history) {
        let html = `
            <li class="timeline-item-list">
                <h4 class="timeline-item-list-title">${history.year}</h4>
                <ul class="timeline-item-group">
        `;

        history.details.forEach((item) => {
            html += this.getHistoryTimelineDetailTemplate(item);
        });

        html += `</ul>`;

        return html;
    }

    getHistoryTimelineComponent() {
        let html = '<ul class="timeline">';

        this.historyService.getData().forEach((history) => {
            html += this.getHistoryTimelineTemplate(history);
        });

        html += '</ul>';

        return html;
    }

    init() {
        $('.timeline-wrapper').append(this.getHistoryTimelineComponent());
    }
}

(($) => {
    const historyContainer = new HistoryView();
    historyContainer.init();
})(jQuery);
