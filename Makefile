DOCKERBUILDCMD=docker-compose build
DOCKERUPCMD=docker-compose up
CYPRESSRUNCMD=cd e2e npx && cypress run --record --key 9ec01591-2bc4-43b2-ba2b-85658f48980a
CYPRESSGUICMD=cd e2e && npx cypress open

test:
	$(CYPRESSRUNCMD)
	
test-gui:
	$(CYPRESSGUICMD)

docker-build:
	$(DOCKERBUILDCMD)

docker-up:
	$(DOCKERUPCMD)
