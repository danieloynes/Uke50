#Oppgave 1
#tall1 = float(input("skriv in tall 1: "))
#tall2 = float(input("skriv in tall 2: "))
#operasjon = input("skriv in operasjon (+, -, *, /): ")

#if operasjon == "+":
#    print(tall1 + tall2)
#elif operasjon == "-":
#    print(tall1 - tall2)
#elif operasjon == "*":
#    print(tall1 * tall2)
#elif operasjon == "/":
#    print(tall1 / tall2)
#else:
#    print("Ugyldig operasjon")

#Oppgave 2
#høyde = float(input("skriv in høyde: "))
#bredde = float(input("skriv in bredde: "))

#print("Arealet til rektangelen er", høyde*bredde, "cm")

# Oppgave trey
#navn = input("skriv navn: ")
#alder = int(input("skriv alder (under 100): "))
#
#if alder > 100:
#    print("Ugyldig tall")
#elif alder < 0:
#    print("Ugyldig tall")
#else:
#    print("Hei", navn, ", du fyller 100 om", 100 - alder, "år.")

#Oppgave fiere
#tall = int(input("skriv et tall: "))
#
#if tall > 0:
#    print("Tall", tall, "er et positivt tall")
#elif tall < 0:
#    print("Tall", tall, "er et negativt tall")
#else:
#    print("Tall", tall, "er bare 0 :)")

#Oppgave feim
#tall = int(input("Skriv et tall: "))
#sum = 0
#for i in range(1, tall + 1):
#    sum += i
#
#print(f"Summen av alle tall fra 1 til {tall} er {sum}")

#Oppgave sucks
#navn1 = input("Skriv navn 1: ")
#navn2 = input("Skriv navn 2: ")
#navn3 = input("Skriv navn 3: ")
#navn4 = input("Skriv navn 4: ")
#navn5 = input("Skriv navn 5: ")
#
#navn_liste = [navn1, navn2, navn3, navn4, navn5]
#
#print("Navnene i listen er:", navn_liste)

#Oppgave siuuuuu
navn_liste = []

for i in range(5):
    navn = input(f"Skriv navn {i + 1}: ")
    navn_liste.append(navn)

print("Navnene i listen er:", navn_liste)