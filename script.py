import random

KEY = 'class="code"'

svg = ""
with open('images/coder.svg') as f:
    svg = f.readlines()
with open('images/new_coder.svg', 'w') as f:
    for line in svg:
        if KEY in line:
            index = line.find(KEY) + len(KEY) - 1
            f.write(line[:index] + str(random.randint(0, 5)) + line[index:])
        else:
            f.write(line)