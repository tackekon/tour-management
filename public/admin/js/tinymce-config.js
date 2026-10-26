tinymce.init({
  selector: 'textarea[textarea-mce]',
  license_key: 'gpl', // The editor is disabled because a TinyMCE license key has not been provided.
  plugins: 'lists link image table code help wordcount',
  images_upload_url: '/admin/upload'
});