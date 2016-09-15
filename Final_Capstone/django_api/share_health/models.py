from django.db import models

class User(models.Model):
    name = models.CharField(max_length=25)
    user = models.ForeignKey(Exercise, related_name='exercise')
    user = models.ForeignKey(Nutrition, related_name='nutrition')

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

class Nutrition(models.Model):
    description = models.CharField(max_length=25)
    amount = models.CharField(max_length=25)
    unit = models.CharField(max_length=25)
    calories = models.CharField(max_length=25)
    carbs = models.CharField(max_length=25)
    proteins = models.CharField(max_length=25)
    lipids = models.CharField(max_length=25)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)

class Exercise(models.Model):
    description = models.CharField(max_length=25)
    amount = models.CharField(max_length=25)
    unit = models.CharField(max_length=25)
    calories_burned = models.CharField(max_length=25)

    def __str__(self):
        return "{}: {}".format(self.id, self.name)