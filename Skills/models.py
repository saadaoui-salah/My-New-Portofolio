from django.db import models

class Speciality(models.Model):
    Skills = models.ManyToManyField('Skill')
    Name   = models.CharField(verbose_name="Skill Name", max_length=50)
    def __str__(self):
        return self.Name
    class Meta():
        verbose_name        = "Speciality"
        verbose_name_plural = "Specialities"

class Skill(models.Model):
    Name       = models.CharField(max_length=50)
    Percentage = models.IntegerField(verbose_name="Precentage")
    
    def __str__(self):
        return self.Name