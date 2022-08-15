package main

import (
	"github.com/RokiLord/nomadcoin/cli"
	"github.com/RokiLord/nomadcoin/db"
)

func main() {
	defer db.Close()
	cli.Start()
}
