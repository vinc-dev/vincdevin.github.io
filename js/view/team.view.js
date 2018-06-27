class TeamView {
    constructor() {
        this.teamService = new TeamService();
    }

    getTeamTemplate(team) {
        return `
            <div class="is-3 team-img-container">
                <div class="panel">
                    <div class="panel-heading team-img-wrapper">
                        <img src="./assets/${team.image}" class="img-responsive img-rounded">
                    </div>
                    <div class="panel-body">
                        <p class="panel-title text-center text-bold">${team.name}</p>
                        <p class="team-motto">${team.motto}</p>
                        <p class="team-description">${team.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    getTeamComponent() {
        let html = '<div class="columns">';

        for (let i = 0; i < this.teamService.getData().length; i++) {
            const team = this.teamService.getData()[i];

            html += this.getTeamTemplate(team);
        }

        html += '</div>';

        return html;
    }

    init() {
        $('.team-wrapper').append(this.getTeamComponent());
    }
}

(($) => {
    const teamContainer = new TeamView();
    teamContainer.init();
})(jQuery);
