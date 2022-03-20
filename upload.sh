ID=$1
EXTENSION=$2

URL_REQUEST="https://transfer.sh/$ID.$EXTENSION"
URL="$(curl -s --upload-file ./$ID $URL_REQUEST)" && echo $URL && rm ./$ID