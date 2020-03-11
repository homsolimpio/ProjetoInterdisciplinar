import { OnInit, Component } from "@angular/core";
import { GinasioService } from "../ginasio.service";
import { FormBuilder } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { EstadoService } from "../../endereco/estado/estado.service";
import { CidadeService } from "../../endereco/cidade/cidade.service";
import { Cidade } from "../../endereco/cidade/cidade";

@Component({
  selector: "app-ginasio-form",
  templateUrl: "./ginasio-form.component.html",
  styleUrls: ["./ginasio-form.component.css"]
})
export class GinasioFormComponent implements OnInit {
  cidades: Cidade[];
  constructor(
    private ginasioService: GinasioService,
    private estadoService: EstadoService,
    private cidadeService: CidadeService,
    private builder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.cidadeService.findCidadeByEstadoId(1).subscribe(cidades => {
      this.cidades = cidades;
      console.log(this.cidades);
    });
  }
}
