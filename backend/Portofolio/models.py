from django.db import models


class Project(models.Model):
    Name         = models.CharField(max_length=50, verbose_name="Project Name")
    Description  = models.TextField(verbose_name="Project Description")
    Url          = models.URLField(verbose_name='Project URL')
    Image        = models.ImageField(verbose_name='Project Image', upload_to=None)
    Technologies = models.ManyToManyField('Technology') 
    def __str__(self):
        return self.Name
    
class Technology(models.Model):
    Name             = models.CharField(max_length=50)
    TextColor        = models.CharField(max_length=50, verbose_name="Text Color")
    BackgroundColor  = models.CharField(max_length=50, verbose_name="Background Color")
    
    def __str__(self):
        return self.Name

    class Meta():
        verbose_name        = "Technology"
        verbose_name_plural = "Technologies"
