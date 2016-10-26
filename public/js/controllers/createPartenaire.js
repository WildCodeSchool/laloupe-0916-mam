class createPartenaire {
    constructor(partenaireService) {
        this.partenaireService = partenaireService;
        this.partenaire = {}
        this.load();

        function uploadFile(file) {
            var url = '/api/picture';
            var xhr = new XMLHttpRequest();
            var fd = new FormData();
            xhr.open("POST", url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    // Every thing ok, file uploaded
                    console.log(xhr.responseText); // handle response.
                }
            };
            fd.append("upload_file", file);
            xhr.send(fd);
        };

        var uploadfiles = document.querySelector('#uploadImage');
        uploadfiles.addEventListener('change', function() {
            var files = this.files;
            for (var i = 0; i < files.length; i++) {
                uploadFile(this.files[i]); // call the function to upload the file
            }
        }, false);

    }

    load() {
        this.partenaireService.getAll().then((res) => {
            this.partenaires = res.data;
        })
    }

    create(partenaire) {
        var urlImage = '/uploads/img_' + document.getElementById('uploadImage').value.split(/(\|\/)/g).pop().replace('C:\\fakepath\\', '');
        console.log(urlImage);
        partenaire.logoPartenaire = urlImage;

        if (!partenaire.descriptionPartenaire)
            partenaire.descriptionPartenaire = "&nbsp;";

        partenaireService.create(this.partenaire.logoPartenaire, this.partenaire.titrePartenaire, this.partenaire.descriptionPartenaire).then(() => {
            this.partenaire = {};
            this.load()
        })
    }

    delete(partenaire) {
        this.partenaireService.delete(partenaire._id, partenaire.logoPartenaire, partenaire.titrePartenaire, partenaire.descriptionPartenaire).then(() => {
            this.load()
        })
    }
}
