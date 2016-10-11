class adminController {
    constructor() {
        $("#boutonActivites").click(function() {
            $("#modifInfosPratiques").hide();
            $("#modifPartenaires").hide();
            $("#modifActivites").toggle("slow");
        });
        $("#boutonInfos").click(function() {
            $("#modifActivites").hide();
            $("#modifPartenaires").hide();
            $("#modifInfosPratiques").toggle("slow");
        });
        $("#boutonPart").click(function() {
            $("#modifActivites").hide();
            $("#modifInfosPratiques").hide();
            $("#modifPartenaires").toggle("slow");
        });

    }
    addActivity() {
      this.$location.path('/addActivity');
    }
}
