from django.db import models

class Skill(models.Model):
    Name  = models.CharField(verbose_name="Skill Name", max_length=50)
    Image = models.ImageField(verbose_name="Skill Image", upload_to="media/skills")   
    def __str__(self):
        return self.Name
    class Meta():
        verbose_name        = "Skill"
        verbose_name_plural = "Skills"
    
class Technology(models.Model):
    Skill      = models.ForeignKey(Skill,verbose_name="Skill",blank=True,on_delete=models.CASCADE)
    Name       = models.CharField(max_length=50)
    Percentage = models.IntegerField(verbose_name="Precentage")
    
    def __str__(self):
        return self.Name

    class Meta():
        verbose_name        = "Technology"
        verbose_name_plural = "Technologies"

    