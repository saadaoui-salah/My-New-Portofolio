from django.db import models


class Project(models.Model):
    Name         = models.CharField(max_length=50, verbose_name="Project Name")
    Description  = models.TextField(verbose_name="Project description")
    Url          = models.URLField(verbose_name='Project URL')
    Image        = models.ImageField(verbose_name='Project Image', upload_to=None)
    Technologies = models.ManyToManyField('Skills.Technology') 
    def __str__(self):
        return self.Name
    
    