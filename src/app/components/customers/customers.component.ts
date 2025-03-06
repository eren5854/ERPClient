import { Component, ElementRef, ViewChild } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { CustomerModel } from '../../models/customer.model';
import { HttpService } from '../../services/http.service';
import { CustomerPipe } from '../../pipes/customer.pipe';
import { NgForm } from '@angular/forms';
import { SwalService } from '../../services/swal.service';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [SharedModule, CustomerPipe],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  customers: CustomerModel[] = [];
  customerModel:CustomerModel = new CustomerModel();
  search:string = "";

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;

  constructor(
    private http: HttpService,
    private swal: SwalService
  ){
    this.getAll();
  }

  ngOninit():void{
    this.getAll();
  }

  getAll(){
    this.http.post<CustomerModel[]>("Customers/GetAll", {}, (res) => {
      this.customers = res;
    })
  }

  create(form:NgForm){
    if(form.valid){
      this.http.post<string>("Customers/Create", this.customerModel, (res) => {
        this.swal.callToast(res);
        this.customerModel = new CustomerModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
}
